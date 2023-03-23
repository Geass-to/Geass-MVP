import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "",
    username: "",
    bio: "",
    city: "",
    country: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload;
    },
    getUser: (state) => {
      return state.value;
    },
    updateUser: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

export const { addUser, getUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
