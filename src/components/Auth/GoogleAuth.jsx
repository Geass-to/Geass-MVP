import React from "react";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SetUser from "./SetUser";
import { login } from "../../features/authSlice";


const GoogleAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {

        // console.log(userCredential.user);
        const user = userCredential.user;
        // SetUser(user)
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(login(user));
        // console.log(user);
        navigate("/");
  
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return <i onClick={signInWithGoogle} className="fa-brands fa-google"></i>;
};

export default GoogleAuth;
