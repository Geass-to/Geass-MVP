import { createSlice } from "@reduxjs/toolkit";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Define a initial state for the userSlice
const initialState = { 
  value: {
    name: "",
    username: "",
    bio: "",
    city: "",
    country: "",
  } 
}

// Define the userSlice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload;
    },
    getUser: (state, action) => {
      state.value = action.payload;
    },
    updateUser: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
  },
});

// Export the userSlice actions
export const { addUser, getUser, updateUser } = userSlice.actions;

// Export a selector that can be used to select the user state
export const selectUser = (state) => state.user.value;

// In your ReactJS app, import the userSlice actions and use them to interact with the user state in Redux
import { useDispatch, useSelector } from "react-redux";
import { addUser, getUser, updateUser, selectUser } from "./path/to/userSlice";
import { useEffect } from "react";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Define a component that can add, get, and update the user information
const User = () => {
    
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const db = getFirestore();
    const userRef = doc(db, "users", "user123");
    getDoc(userRef).then((doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        dispatch(getUser(userData));
      }
    });
  }, [dispatch]);

  const handleAdd = async () => {
    const db = getFirestore();
    const userRef = doc(db, "users", "user123");
    const newUser = {
      name: "John",
      username: "jdoe",
      bio: "Lorem ipsum dolor sit amet",
      city: "New York",
      country: "USA",
    };
    await setDoc(userRef, newUser);
    dispatch(addUser(newUser));
  };

  const handleUpdate = async () => {
    const db = getFirestore();
    const userRef = doc(db, "users", "user123");
    const updatedFields = {
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      city: "Los Angeles",
    };
    await updateDoc(userRef, updatedFields);
    dispatch(updateUser(updatedFields));
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Bio: {user.bio}</p>
      <p>City: {user.city}</p>
      <p>Country: {user.country}</p>
      <button onClick={handleAdd}>Add User</button>
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
}