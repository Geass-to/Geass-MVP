import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { SignUp } from "./components/Auth/SignUp";
import Home from "./components/HomePage/Home";
import { Scroll_Items } from "./components/HomePage/Scroll_Items";
import { Layout } from "./components/Layout";
import "./styles/style.css";
import "./styles/animate.css";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }
  console.log(currentUser)

  return (
    <Routes>
    <Route path="login" element={<Login/>} />
    <Route path="signup" element={<SignUp/>} />
      <Route path="/" element={<Layout />}>
        <Route index element={
          <RequireAuth>
          <Home />
          </RequireAuth>
        } />
      </Route>
    </Routes>
  );
}

export default App;
