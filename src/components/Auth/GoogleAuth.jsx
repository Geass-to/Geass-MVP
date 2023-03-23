import React from 'react'
import { auth, provider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SetUser from './SetUser'

export const signInWithGoogle = () => {

  

  signInWithPopup(auth, provider).then((result) => {
        
    SetUser(result);
    console.log(result.user)

  }).catch((error) => {
    console.error(error)
  })
}

const GoogleAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <i onClick={signInWithGoogle} className="fa-brands fa-google"></i>
  )
}

export default GoogleAuth