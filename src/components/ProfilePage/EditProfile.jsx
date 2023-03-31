import React, { useState } from "react";
import "../../styles/editprofile.css";
import StyledButton from "../Utility/Button";
import { useDispatch } from "react-redux";
import { updateUser } from "../../features/userSlice";
import { checkUsernameExists } from "./CheckUser";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [usernameExists, setUsernameExists] = useState(false); // Add state for checking if username exists
  const [submitDisabled, setSubmitDisabled] = useState(false); // Add state for disabling submit button

  const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: name,
      username: username,
      bio: bio,
      city: city,
      country: country,
    };
    handleAddUser(newUser);
  };

  const handleAddUser = async (newUser) => {
    try {
      const result = await dispatch(updateUser(newUser));
      console.log(result); // successful response from the server
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
    navigate(`/profile`)
  }

  return (
    <>
      <div className="banner">
        <img
          src="https://images.hdqwalls.com/download/kimetsu-no-yaiba-anime-4k-yn-1360x768.jpg"
          alt="Banner Image"
        />
      </div>
      <div className="bottomInfo">
        <div className="profileImage">
          <div className="uploadBox">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Kni0rQUyBectTikBTL3j2zb69aiad1qqwsW-6Ttj3UpNcfqoUMFCuOCFcPosYluvIoc&usqp=CAU"
              alt="Profile Image"
            />
          </div>
          <br />
          <span>Upload profile image</span>
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
              <StyledButton bgColor="var(--light-dark)" onClick={handleGoBack}>Go Back</StyledButton>
              <StyledButton type="submit" disabled={submitDisabled}>Submit Now</StyledButton>
            </li>
            <li></li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
