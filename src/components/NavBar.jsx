import React from 'react'

const NavBar = () => {
    
  return (
    <nav>
    <div className="container">
      <ul>
        <li className="logo"><img src="src\images\Geass_Logo.png" alt="Geass" /></li>
        <li className="search-bar">
          <input type="search" placeholder="Search..." className="search" />
          <span className="fas fa-search"></span>
        </li>
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
          <img src="src\images\lelouch.png" alt="profile Pic" />
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar