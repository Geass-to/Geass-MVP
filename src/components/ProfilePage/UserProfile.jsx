import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, selectUser } from "../../features/userSlice";
import { useSelector, useDispatch } from "react-redux";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uid } = useParams();
  const userData = useSelector(selectUser);
  const [hasDispatched, setHasDispatched] = useState(false);

  const gotoUsername = () => {
    navigate(`/profile/${userData.username}`);
  };

  useEffect(() => {
    const fetchUsername = async () => {
      if (uid) {
        dispatch(getUser(uid));
        setHasDispatched(true);
      }
    };
    fetchUsername();
  }, [uid, navigate]);
  
  useEffect(() => {
    if (userData.username && hasDispatched && userData.id === uid) {
      console.log("Going")
      gotoUsername();
    }else{
      console.log("Not going");
    }
  }, [userData.username, hasDispatched]);

  useEffect(() => {
    if (userData.username && userData.id === uid) {
      setHasDispatched(true);
    }
  }, [userData.username]);

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
