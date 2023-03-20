import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "../../styles/login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }catch (err){
            console.error(err);
        }
    };
    
    // let x = document.getElementById("login");
    // let y = document.getElementById("signup");
    // let z = document.getElementById("btn");
    // let indi = document.getElementById("indicator");
    // function signup() {
    // x.style.display = "none";
    // y.style.display = "inline";
    // z.style.left = "50%";
    // indi.innerText = "Sign Up";
    // }

    // function login() {
    // x.style.display = "inline";
    // y.style.display = "none";
    // z.style.left = "0";
    // indi.innerText = "Log In";
    // }

  return (
    <section>
      <div className="imgBox">
        <img src="https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1580364744298-O1L9OBL88Q02RY2HJ6AD/A-Sabukaru-Introduxction-to-manga-Homonculus-hideo-yamamoto5.jpg" alt="IMG" />
      </div> 
      <div className="contentBox">
        <div className="formBox">
          <span><h2 id="indicator">Log in</h2></span>
          <div className="button-Box">
            <div id="btn"></div>
            <button className="toggle" >Log In</button>
            <button className="toggle" >Sign Up</button>
          </div>
          <div id="trans">
            <form id="login" className="input-group">
              <div className="inputBox">
                <input
                  type="text"
                  className="input-field"
                  placeholder="User Id"
                  required
                />
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  className="input-field"
                  placeholder="Enter Password"
                  required
                />
              </div>

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

            <form id="signup" className="input-group">
              <div className="inputBox">
                <input
                  type="text"
                  className="input-field"
                  placeholder="User Id"
                  required
                />
              </div>
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
                  placeholder="Enter Password"
                  required
                />
              </div>
              {/*<div className="remember">
                <label
                  ><input type="checkbox" /> I agree to terms and
                  conditions</label>
              </div>*/}
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
