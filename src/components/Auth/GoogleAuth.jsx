import React from 'react'
import { signInWithGoogle } from '../../config/firebase'

const GoogleAuth = () => {
  return (
    <i onClick={signInWithGoogle} className="fa-brands fa-google"></i>
  )
}

export default GoogleAuth