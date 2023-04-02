import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "../features/authSlice";
import { useState, useEffect } from "react";
import { selectUser, getUser } from "../features/userSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(selectAuth);
  const userList = useSelector(selectUser);

  const [bookname, setBookname] = useState("");
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || "https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-18.jpg");

  console.log(userList)
  let userProfile

  if (Array.isArray(userList)) {
    userProfile = userList.find((user) => user.id === authUser.uid);
  } else {
    userProfile = userList;
  }

  useEffect(() => {

    if (authUser?.uid && userProfile && authUser.uid === userProfile.id) {
      // Dispatch getUser if the authenticated user is not found in the userList
      if (!userProfile) {
        dispatch(getUser(authUser.uid));
      }
      
      // Store username and profileImage in localStorage
        localStorage.setItem("profileImage", userProfile?.profileImage || "https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-18.jpg");
        localStorage.setItem("username", userProfile?.username || "");

      // Set username and profileImage state from localStorage
      setUsername(localStorage.getItem("username") || "");
      setProfileImage(localStorage.getItem("profileImage") || "https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-18.jpg");
    }
  }, [authUser?.uid, dispatch, userProfile]);

  const handleUpload = () => {
    navigate(`/book/uploadbook`);
  };

  const handleProfile = () => {
    navigate(`/uid/${authUser?.uid}`);
  };
  const handleHome = () => {
    navigate(`/`);
  };
  const handleSearch = () => {
    navigate(`/search/${bookname}`);
  };

  return (
    <nav>
      <div className="container">
        <ul>
          <li className="logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/geassAssets%2FGeass_Logo.png?alt=media&token=6bf27e30-247f-4525-a627-77845eaac411"
              alt="Geass"
              onClick={handleHome}
            />
          </li>
          <li className="search-bar">
            <input
              type="search"
              placeholder="Search..."
              className="search"
              value={bookname}
              onChange={(e) => setBookname(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <span className="fas fa-search" onClick={handleSearch}></span>
          </li>
          <div className="upload-box">
            <li>
              <button onClick={handleUpload}>Upload</button>
            </li>
          </div>
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li className="optional-nav">
              <a href="infopage.html">Browse</a>
            </li>
            <li>
              <a href="#">Genres</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </div>
          <div className="misc-element">
            <div className="support-box">
              <li>
                <a href="#">Support</a>
              </li>
            </div>
            <div className="icons">
              <i className="fa-brands fa-discord"></i>
              <i className="fa-brands fa-reddit"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>

          <li className="profile">
            <img
              src={profileImage}
              alt="profile Pic"
              onClick={handleProfile}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
