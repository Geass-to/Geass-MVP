import React from 'react'
import Avatar from '../Utility/Avatar'
import BannerCard from '../Utility/BannerCard'

const Profile = () => {

  const user = {
    name: "Sergio",
    bio: `[Name] is a [profession/occupation/interest] from [hometown/city/country]. [He/She/They] has [number of years] of experience in [field of expertise]. [He/She/They] is known for [achievements/awards/skills].

    Born and raised in [hometown], [Name] developed a passion for [field of interest] at a young age. After [educational background/training], [he/she/they] began [profession/occupation], honing [his/her/their] skills and gaining valuable experience in [field of expertise]. [Name] has worked with [notable clients/companies/organizations] and has been recognized for [achievements/awards/skills].`,
    completed: "14 Volumes",
    city: "Tokyo",
    country: "America"
  }

  return (
    <BannerCard user={user}>

      <div className="poster-container">

        <div className="poster">
          <Avatar imageUrl="https://wallpaperaccess.com/full/4595683.jpg" size={100} />
        </div>

        <div className="large-card-details-1">
          <h3>{user.name}</h3>
          <p className="info">
            {user.bio}
          </p>
        </div>
        <div className="large-card-details-2">
          <span className="status">Finished</span>
          <span className="volume">{user.completed}</span>
          <br />
          <ul>
            <li>{user.city}</li>
            <li>{user.country}</li>
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
