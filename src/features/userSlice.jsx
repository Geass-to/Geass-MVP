import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

/*  Old Code
const initialState = {
  info: {
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
    getUser: (state) => {
      state.value = action.payload;
    },
    addUser: (state, action) => {
      state.info = action.payload;
    },
    updateUser: (state, action) => {
      state.info = { ...state.info, ...action.payload };
    },
  },
});

*/

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const usersCollectionRef = collection(db, "usertest");
  const data = await getDocs(usersCollectionRef);
  const filteredData = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return filteredData;
});

export const getUser = createAsyncThunk("user/getUser", async (user) => {
  const username = user.username;
  const usersCollectionRef = collection(db, "usertest", username);
  const data = await getDoc(usersCollectionRef);
  return data;
});

export const addUsers = createAsyncThunk("user/addUser", async (newUser) => {
  const username = newUser.username;
  const userRef = doc(db, "usertest", username);
  const data = await setDoc(userRef, newUser);
  return data;
});

export const updateUsers = createAsyncThunk("user/updateUser", async (updatedUser) => {
  const username = updatedUser.username;
  const userRef = doc(db, "usertest", username);
  const data = await updateDoc(userRef, updatedUser);
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userList = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Here, you can extract the relevant data from the action payload and update the state accordingly
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(addUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Here, you can update the state with the newly added user data
      })
      .addCase(addUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      .addCase(updateUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Here, you can update the state with the updated user data
      })
      .addCase(updateUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
  
});

// export const { addUser, getUser, updateUser } = userSlice.actions;

export const selectUser = (state) => state.user.info  

export default userSlice.reducer;
