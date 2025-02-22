import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegister: (state, action) => {
      const tokenDetails = {
        token: action.payload.token,
        timestamp: new Date().getTime() + 60 * 1000,
      };
      localStorage.setItem("token", JSON.stringify(tokenDetails));
      // localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("name", action.payload.name);
      // localStorage.setItem("autoLogin", true); //set for Auto Login function
      state = {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
      return state;
    },
    setLoaded: (state, action) => {
      state = {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    },
    setLogin: (state, action) => {
      const tokenDetails = {
        token: action.payload.token,
        timestamp: new Date().getTime() + 60 * 1000,
      };
      localStorage.setItem("token", JSON.stringify(tokenDetails));
      // localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
      localStorage.setItem("name", action.payload.name);
      localStorage.setItem("autoLogin", true); //set for Auto Login function
      state = {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

      return state;
    },

    setLogout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.setItem("autoLogin", false);
      state = {
        ...state,
        isAuthenticated: false,
      };
      return state;
    },

    setResetpwd: (state, action) => {
      const tokenDetails = {
        token: action.payload.token,
        timestamp: new Date().getTime() + 60 * 1000,
      };
      localStorage.setItem("token", JSON.stringify(tokenDetails));
      // localStorage.setItem("token", action.payload.token);
      state = {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
      return state;
    },

    setAutoLogin: (state, action) => {
      state = {
        ...state,
        isAuthenticated: action.payload,
      };
      return state;
    },

    setUnAuthenticated: (state) => {
      state = {
        ...state,
        isAuthenticated: false,
      };
      return state;
    },
  },
});

export const {
  setRegister,
  setLoaded,
  setLogin,
  setLogout,
  setResetpwd,
  setAutoLogin,
  setUnAuthenticated,
} = authSlice.actions;
export default authSlice.reducer;
