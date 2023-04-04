import React from "react";
import LogOut from "./Auth/LogOut";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate(`/`);
  }; 
  const handleFeedback = () => {
    navigate(`/feedback`);
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <li className="logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/geassAssets%2FGeass_Beta_Logo.png?alt=media&token=3f274ca5-c01b-40d5-99bd-659b1bf17f6c"
              alt="Geass"
              onClick={handleHome}
            />
          </li>
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com/GeassReade81903">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="https://twitter.com/GeassReade81903">
            <i className="fa-brands fa-reddit"></i>
          </a>
          <a href="https://www.instagram.com/geassreader/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/GeassReade81903">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="footer-menu">
          <li>
            <a onClick={handleHome} style={{"cursor":"pointer"}}>Home</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a onClick={handleFeedback} style={{"cursor":"pointer"}}>Feedback</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </div>
        <div className="footer-support-box">
          <a href="https://www.patreon.com/Amethesh">Support</a>
          <LogOut />
        </div>
      </div>
    </footer>
  );
};
