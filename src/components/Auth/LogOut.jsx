import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { auth } from '../../config/firebase';
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice";


const LogOut = () => {

  const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth)
            .then(() => {
                dispatch(logout());                
                console.log("LogOut");
            })
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <a onClick={handleLogout}>Log Out</a>
  )
}

export default LogOut