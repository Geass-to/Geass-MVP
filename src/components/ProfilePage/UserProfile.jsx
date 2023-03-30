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
    navigate(`/${userData.username}`);
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
      gotoUsername();
    }
  }, [userData.username, navigate]);

  // Render the user profile with the fetched username
  return (
    <div>
      <h1>User Profile:</h1>
      {/* Render user profile content here */}
    </div>
  );
};

export default UserProfile;
