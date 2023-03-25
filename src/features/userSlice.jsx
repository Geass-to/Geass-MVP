import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, getDoc, setDoc, updateDoc, doc } from "firebase/firestore";
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

let collectionName = "usertest";

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const usersCollectionRef = collection(db, collectionName);
  const data = await getDocs(usersCollectionRef);
  const filteredData = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return filteredData;
});

export const getUser = createAsyncThunk("user/getUser", async (user) => {
  const docName = user.email;
  const usersCollectionRef = collection(db, collectionName, docName);
  const data = await getDoc(usersCollectionRef);
  return data;
});

export const addUser = createAsyncThunk("user/addUser", async (newUser) => {
  const docName = newUser.email;
  const userRef = doc(db, collectionName, docName);
  const data = await setDoc(userRef, newUser);
  console.log("data")
  console.log(data)
  return data;
});

export const updateUser = createAsyncThunk("user/updateUser", async (updatedUser) => {
  const docName = JSON.parse(localStorage.getItem("user")).email;
  const userRef = doc(db, collectionName, docName);
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
      //Get multiple user
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
      //Get single user
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userList = action.payload;
        // state.userList.push(action.payload);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //Add a user
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userList.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //Update the user
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userList = action.payload;
        // state.userList.push(action.payload);       
        // Here, you can update the state with the updated user data
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
  
});

// export const { addUser, getUser, updateUser } = userSlice.actions;

export const selectUser = (state) => state.user.userList;
export const getUserStatus = (state) => state.user.status;  
export const getUserError = (state) => state.user.error;  

export default userSlice.reducer;
