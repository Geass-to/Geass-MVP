import React from 'react'

const Avatar = ({ size, imageUrl }) => {
  return (
   
        <img src={imageUrl} alt="UserProfile" width={size} height={size} />
    // </div>
  )
}

export default Avatar