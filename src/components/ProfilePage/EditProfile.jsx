import React, { useState } from "react";
import "../../styles/editprofile.css";
import StyledButton from "../Utility/Button";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../features/userSlice";

const EditProfile = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

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
                onChange={(e) => setUsername(e.target.value)}
              />
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
              <input type="password" disabled="disabled"/>
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
              <StyledButton bgColor="var(--light-dark)">Go Back</StyledButton>
              <StyledButton type="submit">Submit Now</StyledButton>
            </li>
            <li></li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
