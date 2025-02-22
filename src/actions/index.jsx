import axios from "../components/utils/request/index";
import {
  setRegister,
  setLogin,
  setLogout,
  setResetpwd,
  // setAutoLogin,
} from "../redux/auth";
import setAuthToken from "../components/utils/setAuthToken";
// import base from "../components/utils/request/index";

// export const loadUser = async () => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }
//   try {
//     const res = await axios.get("/api/auth");
//     dispatch(setLoaded(res.data));
//   } catch (err) {}
// };

export const register = async (
  { name, email, password },
  setError,
  dispatch,
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const registerURL = "/api/users/register";
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post(registerURL, body, config);
    setError("");
    dispatch(setRegister(res.data));
    // loadUser();
  } catch (error) {
    if (error?.response?.status === 400) {
      let message =
        error?.response?.data?.error || error?.response?.data?.errors[0]?.msg;
      setError(message);
    } else if (error?.response?.status === 500) {
      setError("Internal Server Error");
    } else if (error.message === "Network Error") {
      setError("Network Error");
    }
  }
};

export const login = async ({ email, password }, setErrorMsg, dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const loginURL = "/api/users/login";
  const body = { email, password };
  try {
    const res = await axios.post(loginURL, body, config);
    setErrorMsg("");
    dispatch(setLogin(res.data));
    // loadUser();
  } catch (error) {
    if (error?.response?.status === 400) {
      setErrorMsg("The Email address and Password do NOT match");
    } else if (error?.response?.status === 500) {
      setErrorMsg("Internal Server Error");
    }
  }
};

export const getLink = async (
  setLinkData,
  setError,
  setAvatarUrl,
  setEnteredTitle,
  navigate,
) => {
  const userPath = window.location.pathname;
  try {
    const res = await axios.get(`/api/links${userPath}`);
    const allLinks = res.data.links.links;
    setLinkData(allLinks);
    if (res.data.avatar.url) {
      setAvatarUrl(res.data.avatar.url);
    }
    if (res.data.title) {
      setEnteredTitle(res.data.title);
    }
    allLinks.map((item) => {
      return item.visible === true;
    });
  } catch (error) {
    if (error?.response?.status === 400) {
      navigate("/error404");
    } else if (error?.response?.status === 500) {
      setError("Links are not available");
    }
  }
};

export const deleteAccount = async (navigate, dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    await axios.delete("/api/users/deleteMe", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(setLogout());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

//forget password link
export const getResetPasswordLink = async (email, setError, setEmailSent) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const forgetPwdURL = "/api/users/forgetpwd";
  try {
    const data = await axios.post(forgetPwdURL, { email }, config);

    if (data.status == 200) {
      setEmailSent(true);
    }
    setError("");
  } catch (error) {
    setEmailSent(false);
    if (error.response.status == 403) {
      let message = error.response.data;
      setError(message);
    }
  }
};

// send email to selected developers at developers page
export const sendEmailToDev = async (name, email, message, developerName) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const loginURL = "/api/users/sendEmail";
  const emailContent = message; //Renaming the message, make sure it won't conflict with the config name of node mailer.
  try {
    // const response = await axios.post(
    //   loginURL,
    //   { developerName, name, email, emailContent },
    //   config,
    // );
    await axios.post(
      loginURL,
      { developerName, name, email, emailContent },
      config,
    );
  } catch (error) {
    console.log(error);
  }
};

// toggle viewable status for settings page
export const toggleViewableStatus = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const loginURL = "/api/users/setting/viewable";
  try {
    await axios.patch(loginURL, config);
  } catch (error) {
    console.log(error);
  }
};

//reset password
export const resetpwd = async (password, setErrorNotice, dispatch, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const resetpwdURL = "/api/users/resetpwd";
  const body = { resetToken: data, resetPassword: password };
  try {
    const res = await axios.patch(resetpwdURL, body, config);
    setErrorNotice("");
    dispatch(setResetpwd(res.data));
    // loadUser();
  } catch (error) {
    if (error?.response?.status === 400) {
      let message =
        error?.response?.data?.error || error?.response?.data?.errors[0]?.msg;
      setErrorNotice(message);
    } else if (error?.response?.status === 500) {
      setErrorNotice("Internal Server Error");
    } else if (error.message === "Network Error") {
      setErrorNotice("Network Error");
    }
  }
};

// export const checkTokenExpire = (dispatch) => {
//   const token = JSON.parse(localStorage.getItem("token"));
//   const tokenTimeStr = token.timestamp;
//   const timeNow = new Date().getTime().toString();
//   const expireTime = tokenTimeStr - timeNow;
//   console.log(expireTime);
//   if (expireTime < 0) {
//     dispatch(setLogout());
//     return dispatch(setAutoLogin(false));
//   }
//   dispatch(setAutoLogin(true));
// };
