import { analytics, auth } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import TwitterAuth from "./TwitterAuth";
import FacebookAuth from "./FacebookAuth";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
import { checkUsernameExists } from "../ProfilePage/CheckUser";

import { generateRandomProfile } from "../utility/profileRandomizer";
import { logEvent } from "firebase/analytics";

export const SignUp = () => {
  //!States
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [error, setError] = useState("");
  const [usernameExists, setUsernameExists] = useState(false); // Add state for checking if username exists
  const [submitDisabled, setSubmitDisabled] = useState(false); // Add state for disabling submit button


  const dispatch = useDispatch();

  //!For Navigation
  const navigate = useNavigate();
  const gotoLogIn = () => {
    navigate("/login");
  };

  //!Check username
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

  //!For Auth
  //TODO Verify email
  const handleSignup = async (e) => {
    e.preventDefault();

    // const randomProfileImage = generateRandomProfile();
    // console.log(randomProfileImage);

    // setProfileImage(randomProfileImage);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result.user) {
        // Send verification email to the user's email address
          sendEmailVerification(result.user).then(() => {
          alert("Sent email verification!");
        });
        // await result.user.sendEmailVerification();
        // Create a new user object to add to the database
        const newUser = { email: email, username: username, profileImage: generateRandomProfile() };
        
        //LogEvents for signup
        const method = "Email Method"
        logEvent(analytics, "sign_up", {method: method});

        // Dispatch the addUser action to add the new user to the database
        const data = dispatch(addUser(newUser));
        // console.log(data);
        navigate("/profile/editprofile");
      }
    } catch (err) {
      console.error(`ERROR:${err}`);
      console.error(`ERROR CODE: ${err.code}`);
      console.error(`ERROR MESSAGE: ${err.message}`);
      // const errorMessage = err.message.split(':')[1].trim();
      const errorCode = err.code.split("/")[1];
      setError(errorCode);
    }
  };

  //!Handleing Confirm Password
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const checkPasswordMatch = () => {
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleHome = () => {
    navigate(`/`);
  };

  return (
    <section>
      <div className="imgBox">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/geassAssets%2FA-Sabukaru-Introduxction-to-manga-Homonculus-hideo-yamamoto5.png?alt=media&token=b6d506e1-4dd8-422d-804b-52c20cf40e89"
          alt="IMG"
        />
      </div>
      <div className="contentBox">
        <div className="formBox">
          <span>
          <li className="logo" style={{"listStyle":"none"}}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/geassAssets%2FGeass_Logo.png?alt=media&token=6bf27e30-247f-4525-a627-77845eaac411"
            alt="Geass"   
            onClick={handleHome}           
          />
        </li>
          </span>
          <div className="button-Box">
            <div id="btn" style={{ left: "50%" }}></div>
            <button className="toggle" onClick={gotoLogIn}>
              Log In
            </button>
            <button className="toggle">Sign Up</button>
          </div>
          <div id="trans">
            <form id="signup" className="input-group" onSubmit={handleSignup}>
            <div className="inputBox">
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                required
                onChange={handleUsernameChange}
              />
              {usernameExists && (
                <span id="error-message">Username already exists</span>
              )}
            </div>
              <div className="inputBox">
                <input
                  type="text"
                  className="input-field"
                  placeholder="Email Id"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  className="input-field"
                  name="password"
                  placeholder="Password"
                  value={password}
                  required
                  onChange={handleInputChange}
                  onBlur={checkPasswordMatch}
                  
                />
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  className="input-field"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  required
                  onChange={handleInputChange}
                  onBlur={checkPasswordMatch}
                />
              </div>
              {/*<div className="remember">
            <label
              ><input type="checkbox" /> I agree to terms and
              conditions</label>
          </div>*/}
              {!passwordMatch && <span id="error">Passwords do not match</span>}
              {error && <span id="error">{error}</span>}
              <div className="inputBox">
                <input type="submit" value="Sign Up" disabled={submitDisabled} />
              </div>

              <h3>Login with social media</h3>
              <ul className="logos">
                <li>
                  <GoogleAuth />
                </li>
                <li>
                  <TwitterAuth />
                </li>
                <li>
                  <FacebookAuth />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
