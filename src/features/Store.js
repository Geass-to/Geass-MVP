import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import bookSilce from "./bookSilce";
import userReducer from "./userSlice";


export const store = configureStore({
    reducer: {
      user: userReducer,
      auth: authSlice,
      books: bookSilce
    },
  });