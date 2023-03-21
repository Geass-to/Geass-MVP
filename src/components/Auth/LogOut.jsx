import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../config/firebase';

const LogOut = () => {

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await signOut(auth)
            console.log("LogOut")
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <a onClick={handleLogout}>Log Out</a>
  )
}

export default LogOut