import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { auth } from '../../config/firebase';
import { AuthContext } from '../../context/AuthContext';

const LogOut = () => {

    const {dispatch} = useContext(AuthContext)

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth)
            .then(() => {
                dispatch({type:"LOGOUT"})                
                console.log("LogOut")
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