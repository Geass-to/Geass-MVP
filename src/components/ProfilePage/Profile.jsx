import React, { useEffect, useState } from 'react';
import Avatar from '../Utility/Avatar';
import BannerCard from '../Utility/BannerCard';
import { useSelector, useDispatch } from "react-redux";
import { getUser, selectUser } from '../../features/userSlice';
import { selectAuth } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Profile =  () => {

  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const authUser = useSelector(selectAuth);
  const navigate = useNavigate()

  console.log(authUser);

  useEffect(() => {
    const uid = authUser.uid
    console.log(uid)
    if(uid){
      dispatch(getUser(uid));
    }
    else{
      console.log("Loading")
    }
    console.log("In effect")
  }, [dispatch]);

  const handleEditProfile = () => {
    navigate(`/editprofile`)
  }

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
          <button className='readnow' onClick={handleEditProfile}>Edit Profile</button>
        </div>
      </div>

  </BannerCard>
  )
}

export default Profile
