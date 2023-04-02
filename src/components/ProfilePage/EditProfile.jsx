import React, { useEffect, useState } from "react";
import "../../styles/editprofile.css";
import StyledButton from "../Utility/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectUser, updateUser } from "../../features/userSlice";
import { checkUsernameExists } from "./CheckUser";
import { useNavigate } from "react-router-dom";
import { generateRandomProfile } from "../utility/profileRandomizer";
import { selectAuth } from "../../features/authSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userAuth = useSelector(selectAuth);

  const userData = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUser(userAuth.uid));
    // navigate(`/profile/editprofile`)
    console.log("in effect - in editprofile");
  }, []);
  // let tempname = userData.name;
  const [name, setName] = useState(userData.name);
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const [country, setCountry] = useState(userData.country);
  const [city, setCity] = useState(userData.city);
  const [bio, setBio] = useState(userData.bio);

  const [profileImage, setProfileImage] = useState(userData.profileImage);

  const [usernameExists, setUsernameExists] = useState(false); // Add state for checking if username exists
  const [submitDisabled, setSubmitDisabled] = useState(false); // Add state for disabling submit button

  const handleGetNewProfile = () => {
    setProfileImage(generateRandomProfile());
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      username: username,
      bio: bio,
      city: city,
      country: country,
      profileImage: profileImage,
    };
    handleAddUser(newUser);
  };

  const handleAddUser = async (newUser) => {
    try {
      const result = await dispatch(updateUser(newUser));
      console.log(result); // successful response from the server
      navigate(`/`);
    } catch (error) {
      console.error(error); // error while adding the user
    }
  };

  const handleUsernameChange = async (event) => {
    const username = event.target.value;
    setUsername(username);
    if (username) {
      try {
        const exists = await checkUsernameExists(username);
        setUsernameExists(exists);
        setSubmitDisabled(exists);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleGoBack = () => {
    navigate(`/uid/${userAuth.uid}`);
  };

  return (
    <>
      <div className="banner">
        <img src={profileImage} alt="Banner Image" />
      </div>
      <div className="bottomInfo">
        <div className="profileImage">
          <div className="uploadBox">
            <img src={profileImage} alt="Profile Image" />
          </div>
          <br />
          <center>
            <StyledButton
              bgColor="var(--primary-light)"
              onClick={handleGetNewProfile}
            >
              New Profile
            </StyledButton>
          </center>
          {/* <span onClick={handleGetNewProfile}>Get a new Profile</span> */}
        </div>
        <form className="profileDetails" onSubmit={onSubmit}>
          <ul>
            <li>
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <span>Username</span>
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className={usernameExists ? "error" : ""}
              />
              {usernameExists && (
                <span id="error-message">Username already exists</span>
              )}
            </li>
            <li>
              <span>Email Id</span>
              <input
                type="email"
                value={email}
                /*onChange={(e) => setEmail(e.target.value)}*/
                readOnly="readOnly"
                placeholder="Change Email"
              />
            </li>
            <li>
              <span>Password</span>
              <input type="password" disabled="disabled" />
            </li>
            <li>
              <span>Country</span>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </li>
            <li>
              <span>City</span>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </li>
            <li>
              <span>Bio</span>
              <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
            </li>
            <li id="editprofile-submit-button">
              <StyledButton bgColor="var(--light-dark)" onClick={handleGoBack}>
                Go Back
              </StyledButton>
              <StyledButton type="submit" disabled={submitDisabled}>
                Submit Now
              </StyledButton>
            </li>
            <li></li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
