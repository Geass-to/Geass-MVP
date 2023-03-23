import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import TwitterAuth from "./TwitterAuth";
import FacebookAuth from "./FacebookAuth";

export const SignUp = () => {

  //!States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [error, setError] = useState('');

  //!For Navigation 
  const navigate = useNavigate();
  const gotoLogIn = () => {navigate("/login")};

  //!For Auth
  //TODO Verify email
  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      navigate("/profile/editprofile");
        
    }catch (err){
      console.error(`ERROR:${err}`);
      console.error(`ERROR CODE: ${err.code}`);
      console.error(`ERROR MESSAGE: ${err.message}`);
      // const errorMessage = err.message.split(':')[1].trim();
      const errorCode = err.code.split('/')[1];
      setError(errorCode);
    }

  }
    
  //!Handleing Confirm Password
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'password') {
    setPassword(value);
    } else {
    setConfirmPassword(value);
    }
  }

  const checkPasswordMatch = () => {
    if (password !== confirmPassword) {
    setPasswordMatch(false);
    } else {
    setPasswordMatch(true);
    }
  }

  return (
    <section>
      <div className="imgBox">
        <img src="src\assets\images\A-Sabukaru-Introduxction-to-manga-Homonculus-hideo-yamamoto5.png" alt="IMG" />
      </div> 
      <div className="contentBox">
        <div className="formBox">
          <span><h2 id="indicator">Sign Up</h2></span>
          <div className="button-Box">
            <div id="btn" style={{"left":"50%"}} ></div>
            <button className="toggle" onClick={gotoLogIn} >Log In</button>
            <button className="toggle" >Sign Up</button>
          </div>
          <div id="trans">
          <form id="signup" className="input-group" onSubmit={handleSignup} >
          <div className="inputBox">
            <input
              type="text"
              className="input-field"
              placeholder="Email Id"
              required
              onChange={e=>setEmail(e.target.value)}
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
          {!passwordMatch && (
            <span id="error">Passwords do not match</span>
          )}
          {error && (
            <span id="error">{error}</span>
          )}
          <div className="inputBox">
            <input type="submit" value="Sign Up" />
          </div>

          <h3>Login with social media</h3>
          <ul className="logos">
            <li><GoogleAuth/></li>
            <li><TwitterAuth/></li>
            <li><FacebookAuth/></li>
          </ul>
        </form>
          </div>
        </div>
      </div>
    </section>
  )
}
