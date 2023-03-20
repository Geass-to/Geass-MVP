import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }catch (err){
            console.error(err);
        }
    };
    
    const navigate = useNavigate();
    const gotoLogIn = () => {navigate("/login")};

  return (
    <section>
      <div className="imgBox">
        <img src="src\images\A-Sabukaru-Introduxction-to-manga-Homonculus-hideo-yamamoto5.png" alt="IMG" />
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
          <form id="signup" className="input-group">
          <div className="inputBox">
            <input
              type="text"
              className="input-field"
              placeholder="Email Id"
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              required
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              required
            />
          </div>
          {/*<div className="remember">
            <label
              ><input type="checkbox" /> I agree to terms and
              conditions</label>
          </div>*/}
          <div className="inputBox">
            <input type="submit" value="Sign Up" />
          </div>

          <h3>Login with social media</h3>
          <ul className="logos">
            <li><i className="fa-brands fa-google"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
            <li><i className="fa-brands fa-github"></i></li>
          </ul>
        </form>
          </div>
        </div>
      </div>
    </section>
  )
}
