import React, { useEffect, useState } from 'react';
import Avatar from '../Utility/Avatar';
import BannerCard from '../Utility/BannerCard';
import { useSelector, useDispatch } from "react-redux";
import { getUser, selectUser } from '../../features/userSlice';
import { auth } from '../../config/firebase';

const Profile =  () => {

  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  console.log(userData);
  useEffect(() => {
    console.log("In effect")
    dispatch(getUser(auth.currentUser.uid));
  }, [dispatch]);

  return (
    <BannerCard user={userData}>

      <div className="poster-container">

        <div className="poster">
          <Avatar imageUrl="https://wallpaperaccess.com/full/4595683.jpg" size={100} />
        </div>

        <div className="large-card-details-1">
          <h3>{userData.name}</h3>
          <p className="info">
            {userData.bio}
          </p>
        </div>
        <div className="large-card-details-2">
          <span className="status">Finished</span>
          <span className="volume">{/*userData.completed*/}</span>
          <br />
          <ul>
            <li>{userData.city}</li>
            <li>{userData.country}</li>
            <li>{userData.email}</li>
          </ul>
          <br />
        </div>
        <div className="large-card-details-3">
          <button className="readnow">Create Now</button>
          <button className='readnow'>Edit Profile</button>
        </div>
      </div>

  </BannerCard>
  )
}

export default Profile
