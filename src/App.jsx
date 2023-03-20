import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Auth/Login";
import { SignUp } from "./components/Auth/SignUp";
import Home from "./components/HomePage/Home";
import { Scroll_Items } from "./components/HomePage/Scroll_Items";
import { Layout } from "./components/Layout";
import "./styles/style.css";
import "./styles/animate.css";

function App() {
  return (
    <Routes>
    <Route path="login" element={<Login/>} />
    <Route path="signup" element={<SignUp/>} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
