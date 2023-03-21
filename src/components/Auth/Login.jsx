import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const LogIn = () => {

  //!states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const {dispatch} = useContext(AuthContext)

  //!For Navigation
  const navigate = useNavigate()
  const gotoSignUp = () => {navigate(`/signup`)}

  //!For Auth  
  const handleLogin = async (e) => {
    e.preventDefault();

    try{
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
          //Signed in
          const user = userCredential.user;
          dispatch({type:"LOGIN", payload: user})
          console.log(user);
          navigate("/");
        })
    }catch (err){
      setError(true);
      console.error(`ERROR:${err}`);
      console.error(`ERROR CODE: ${err.code}`);
      console.error(`ERROR MESSAGE: ${err.message}`);
      const errorCode = err.code.split('/')[1];
      setError(errorCode);
    }

  }

  return (
    <section>
      <div className="imgBox">
        <img src="src\assets\images\A-Sabukaru-Introduxction-to-manga-Homonculus-color.png" alt="IMG" />
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
              {/*error && (<span id="error">{error}</span>)*/}
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
