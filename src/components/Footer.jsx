import React from 'react'
import LogOut from './Auth/LogOut'
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

  const navigate = useNavigate();

  const handleBookInfo = () => {
    navigate(`/book/bookinfo`)
  }

  const handleUserPage = () => {
    navigate(`/user/cgcrew`)
  }

  return (
    <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <li className="logo">
              <img src="\src\assets\images\Geass_Logo.png" alt="Geass" />
            </li>
          </div>
          <div className="footer-icons">
            <i className="fa-brands fa-discord" onClick={handleBookInfo}></i>
            <i className="fa-brands fa-reddit" onClick={handleUserPage}></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="footer-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">DMCA Notices</a></li>
            <li><a href="#">Contact Us</a></li>
          </div>
          <div className="footer-support-box">
            <a href="#">Support</a>
            <LogOut/>
          </div>          
        </div>
      </footer>
  )
}
