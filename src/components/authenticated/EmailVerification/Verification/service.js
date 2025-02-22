import axios from "../../../utils/request/index";

// mock request
export const getVerifyResult = async (code) => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  const verifyCode = "/api/email/verify";
  const tokenDetailes = localStorage.getItem("token");
  const token = JSON.parse(tokenDetailes).token; // The token getting method changes as auth reducers changed
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  try {
    return await axios.post(verifyCode, JSON.stringify({ code }), config);
  } catch (err) {
    return false;
  }
};

export const sendMailCode = async () => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }
  const sendMailUrl = "/api/email/send";
  const tokenDetailes = localStorage.getItem("token");
  const token = JSON.parse(tokenDetailes).token; // The token getting method changes as auth reducers changed
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };

  try {
    return await axios.post(sendMailUrl, undefined, config);
  } catch (err) {
    return false;
  }
};
