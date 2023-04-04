import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { auth } from '../../config/firebase';
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";
import { useNavigate } from 'react-router-dom';


const LogOut = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth)
            .then(() => {
                dispatch(logout());                
                console.log("LogOut");
                navigate("/login");
            })
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <a onClick={handleLogout} style={{"cursor":"pointer"}}>Log Out</a>
  )
}

export default LogOut