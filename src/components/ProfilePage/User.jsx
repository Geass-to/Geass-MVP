import React, {useEffect} from "react";
import BannerCard from "../Utility/BannerCard";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, getUserByUsername } from "../../features/userSlice";
import { useParams } from "react-router-dom";
import Avatar from "../Utility/Avatar";

const User = () => {
    const dispatch = useDispatch();
    const { username } = useParams();
    const userData = useSelector(selectUser);

    useEffect(() => {
        dispatch(getUserByUsername(username));
      }, [username]);

  return (
    <BannerCard user={userData}>
      <div className="poster-container">
        <div className="poster">
          <Avatar
            imageUrl="https://wallpaperaccess.com/full/4595683.jpg"
            size={100}
          />
        </div>

        <div className="large-card-details-1">
          <h3>{userData.name}</h3>
          <p className="info">{userData.bio}</p>
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
          <button className="readnow">Edit Profile</button>
        </div>
      </div>
    </BannerCard>
  );
};

export default User;
