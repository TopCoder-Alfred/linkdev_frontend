import axios from "../utils/request/index";

const setAuthToken = (token) => {
  const apiToken = JSON.parse(`${token}`);
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = apiToken.token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
