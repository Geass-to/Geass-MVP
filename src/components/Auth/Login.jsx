import { analytics, auth } from "../../config/firebase";
import { SignInMethod, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import TwitterAuth from "./TwitterAuth";
import FacebookAuth from "./FacebookAuth";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import SetUser from "./SetUser";

export const LogIn = () => {
  //!states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  //!For Navigation
  const navigate = useNavigate();
  const gotoSignUp = () => {
    navigate(`/signup`);
  };

  //!For Auth
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          //Signed in
          const user = userCredential.user;
          if (user.emailVerified) {
            //LogEvents for Login
            const method = user.SignInMethod;
            logEvent(analytics, "login", {method: method});

            // SetUser(user)
            localStorage.setItem("user", JSON.stringify(user));          
            dispatch(login(user));
            // console.log(user);
            navigate("/");
          } else {
            setError(true);
            setError("Please verify your email address.");
          }
        }
      );
    } catch (err) {
      setError(true);
      console.error(`ERROR:${err}`);
      console.error(`ERROR CODE: ${err.code}`);
      console.error(`ERROR MESSAGE: ${err.message}`);
      const errorCode = err.code.split("/")[1];
      setError(errorCode);
    }
  };

  const handleHome = () => {
    navigate(`/`);
  };

  return (
    <section>
      <div className="imgBox">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/geassAssets%2FA-Sabukaru-Introduxction-to-manga-Homonculus-color.png?alt=media&token=44b75e52-4dc5-46d1-8fb0-0d51649a1abb"
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
            <div id="btn"></div>
            <button className="toggle">Log In</button>
            <button className="toggle" onClick={gotoSignUp}>
              Sign Up
            </button>
          </div>
          <div id="trans">
            <form id="login" className="input-group" onSubmit={handleLogin}>
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
                  placeholder="Enter Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <span id="error">Wrong email or password!</span>}
              {error && (<span id="error">{error}</span>)}
              <div className="inputBox">
                <input type="submit" value="Log In" />
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