import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userReducer from "./userSlice";


export const store = configureStore({
    reducer: {
      user: userReducer,
      auth: authSlice,
    },
  });