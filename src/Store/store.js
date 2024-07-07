import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: true,
    isRegistered: true,
    googleInfo: null,
  },
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logOut(state) {
      state.isLogin = true;
    },
    register(state) {
      state.isRegistered = true;
    },
    setGoogleInfo(state, action) {
      state.googleInfo = action.payload;
    },
  },
});

export const { login, logOut, register, setGoogleInfo } = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default authSlice.reducer;
