import React from 'react';
import Avatar from '../Utility/Avatar';
import BannerCard from '../Utility/BannerCard';
import { useSelector } from "react-redux";

const Profile = () => {

  // const userData = {
  //   name: "Sergio",
  //   bio: `[Name] is a [profession/occupation/interest] from [hometown/city/country]. [He/She/They] has [number of years] of experience in [field of expertise]. [He/She/They] is known for [achievements/awards/skills].

  //   Born and raised in [hometown], [Name] developed a passion for [field of interest] at a young age. After [educational background/training], [he/she/they] began [profession/occupation], honing [his/her/their] skills and gaining valuable experience in [field of expertise]. [Name] has worked with [notable clients/companies/organizations] and has been recognized for [achievements/awards/skills].`,
  //   completed: "14 Volumes",
  //   city: "Tokyo",
  //   country: "America"
  // }
  
  const userData = useSelector((state) => state.user.value);
  console.log(userData)

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
          <span className="volume">{userData.completed}</span>
          <br />
          <ul>
            <li>{userData.city}</li>
            <li>{userData.country}</li>
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
