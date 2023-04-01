import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, selectUser } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uid } = useParams();
  const userData = useSelector(selectUser);

  const gotoUsername = () => {
    navigate(`/profile/${userData.username}`);
  };

  useEffect(() => {
    const fetchUsername = async () => {
      if (uid) {
        dispatch(getUser(uid));
      }
    };
    fetchUsername();
  }, [uid]);

  useEffect(() => {
    if (userData.username) {
      console.log("Going")
      gotoUsername();
    }else{
      console.log("Not going");
    }
  }, [userData.username, navigate]);

  // Render the user profile with the fetched username
  return (
    <div>
      <h1>User Profile:</h1>
  {/*<Link to={`/${userData.username}`}>View user</Link>*/}
      {/* Render user profile content here */}
    </div>
  );
};

export default UserProfile;
