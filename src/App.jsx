import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LogIn } from "./components/Auth/LogIn";
import { SignUp } from "./components/Auth/SignUp";
import Home from "./components/HomePage/Home";
import { Scroll_Items } from "./components/HomePage/Scroll_Items";
import { Layout } from "./components/Layout";
import "./styles/style.css";
import "./styles/animate.css";
import Profile from "./components/ProfilePage/Profile";
import EditProfile from "./components/ProfilePage/EditProfile";
import { useSelector } from "react-redux";

function App() {
  
  const currentUser  = useSelector((state) => state.auth.currentUser)
  console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />

          <Route path="profile">
            <Route index
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="editprofile"
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
