import { createSlice } from "@reduxjs/toolkit";

const INTIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: INTIAL_STATE,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;            
        },
        logout: (state) => {
            state.currentUser = null;
            localStorage.removeItem("user");
        },
    },
});

export const {login, logout} = authSlice.actions;
export const selectAuth = (state) => state.auth.currentUser

export default authSlice.reducer;