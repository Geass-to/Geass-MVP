import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  //For Navigation
  const navigate = useNavigate()
  const gotoSignUp = () => {navigate(`/signup`)}
  //For Auth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);
  
  const handleLogin = async (e) => {
    e.preventDefault();

    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch (err){
        console.error(err);
    }

  }

  return (
    <section>
      <div className="imgBox">
        <img src="src\images\A-Sabukaru-Introduxction-to-manga-Homonculus-color.png" alt="IMG" />
      </div> 
      <div className="contentBox">
        <div className="formBox">
          <span><h2 id="indicator">Log in</h2></span>
          <div className="button-Box">
            <div id="btn"></div>
            <button className="toggle" >Log In</button>
            <button className="toggle" onClick={gotoSignUp}>Sign Up</button>
          </div>
          <div id="trans">
            <form id="login" className="input-group" onSubmit={handleLogin}>
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
                  placeholder="Enter Password"
                  required
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>
              {error && <span id="error">Wrong email or password!</span>}
              <div className="inputBox">
                <input type="submit" value="Log In" />
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
