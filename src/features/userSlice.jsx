import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  query,
  where,
  doc,
} from "firebase/firestore";
import { db, auth } from "../config/firebase";

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

export const getUser = createAsyncThunk("user/getUser", async (docId) => {
  // const docId ;
  console.log(docId);
  const usersCollectionRef = doc(db, collectionName, docId);
  const data = await getDoc(usersCollectionRef);  
  console.log(data);
  // return { ...data, id: docId };
  return { ...data.data(), id: data.id };
});

export const getUserByUsername = createAsyncThunk("user/getUserByUsername", async (username) => {
  console.log("getUserByUsername called with username:", username);
  let data
  try {
    const q = query(collection(db, collectionName), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    console.log(q)  
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      data = { ...doc.data(), id: doc.id };
      return !userDocs.empty;
    } else {
      console.log("Document not found!");
      return userDocs.empty;
    }
  } catch (error) {
    console.error(error);
  }
  // console.log(data);
  return data;
});

export const addUser = createAsyncThunk("user/addUser", async (newUser) => {
  const uid = auth.currentUser.uid;
  const userRef = doc(db, collectionName, uid);
  await setDoc(userRef, newUser);
  console.log("Document written with ID: ", uid);
  return { ...newUser, id: uid };
});

export const updateUser = createAsyncThunk("user/updateUser", async (updatedUser) => {
    const docId = auth.currentUser.uid;
    const userRef = doc(db, collectionName, docId);
    const filteredUser = Object.fromEntries(
      Object.entries(updatedUser).filter(([_, v]) => v !== null && v !== "")
    );
    const data = await updateDoc(userRef, filteredUser);
    console.log(data);
    return { ...filteredUser, id: docId };
  }
);

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
      //Get user by username
      .addCase(getUserByUsername.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserByUsername.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.userList.push(action.payload);
        state.userList = action.payload;
      })
      .addCase(getUserByUsername.rejected, (state, action) => {
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
