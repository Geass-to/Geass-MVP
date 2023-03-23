import React from 'react'
import { auth, provider } from '../../config/firebase'
import { signInWithPopup } from 'firebase/auth'

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.error(error)
  })
}

const GoogleAuth = () => {
  return (
    <i onClick={signInWithGoogle} className="fa-brands fa-google"></i>
  )
}

export default GoogleAuth