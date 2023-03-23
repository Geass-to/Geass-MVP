import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";


const SetUser = (user) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  localStorage.setItem("user", JSON.stringify(user));
  dispatch(login(user));
  navigate("/");
};

export default SetUser;
