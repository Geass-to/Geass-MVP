import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LogIn } from "./components/Auth/LogIn";
import { SignUp } from "./components/Auth/SignUp";
import Home from "./components/HomePage/Home";
import { Layout } from "./components/Layout";
import "./styles/style.css";
import "./styles/animate.css";
import Profile from "./components/ProfilePage/Profile";
import EditProfile from "./components/ProfilePage/EditProfile";
import { useSelector } from "react-redux";
import UserList from "./components/UserList/UserList";
import BookUpload from "./components/BookUpload/BookUpload";
import { selectAuth } from "./features/authSlice";
import UserProfile from "./components/ProfilePage/UserProfile";
import User from "./components/ProfilePage/User";

function App() {
  const currentUser = useSelector(selectAuth);
  // console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path=":username" element={<User />} />

        <Route path="profile">
          <Route
            index
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path=":uid" element={<UserProfile />} />
          <Route
            path="editprofile"
            element={
              <RequireAuth>
                <EditProfile />
              </RequireAuth>
            }
          />
        </Route>

        <Route path="uploadbook" element={<BookUpload />} />

        <Route path="userlist" element={<UserList />} />
      </Route>
    </Routes>
  );
}

export default App;
