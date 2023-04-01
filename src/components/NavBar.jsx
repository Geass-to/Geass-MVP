import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectAuth } from '../features/authSlice';


const NavBar = () => {
    
  const navigate = useNavigate();
  const authUser = useSelector(selectAuth)

  const handleUpload = () => {
    navigate(`/book/uploadbook`);
  }

  const handleProfile = () => {
    navigate(`/uid/${authUser.uid}`)
  }
  const handleHome = () => {
    navigate(`/`)
  }

  return (
    <nav>
    <div className="container">
      <ul>
        <li className="logo"><img src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/geassAssets%2FGeass_Logo.png?alt=media&token=6bf27e30-247f-4525-a627-77845eaac411" alt="Geass" onClick={handleHome}/></li>
        <li className="search-bar">
          <input type="search" placeholder="Search..." className="search" />
          <span className="fas fa-search"></span>
        </li>
        <div className="upload-box">
          <li> <button onClick={handleUpload}>Upload</button> </li>
        </div>
        <div className="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Popular</a></li>
          <li className="optional-nav"><a href="infopage.html">Browse</a></li>
          <li><a href="#">Genres</a></li>
          <li><a href="loginpage.html">About Us</a></li>
        </div>
        <div className="misc-element">
          <div className="support-box">
            <li><a href="#">Support</a></li>
          </div>
          <div className="icons">
            <i className="fa-brands fa-discord"></i>
            <i className="fa-brands fa-reddit"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>

        <li className="profile">
          <img src="\src\assets\images\lelouch.png" alt="profile Pic" onClick={handleProfile}/>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar