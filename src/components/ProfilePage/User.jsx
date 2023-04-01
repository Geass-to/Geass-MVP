import React, { useEffect } from "react";
import BannerCard from "../Utility/BannerCard";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, getUserByUsername } from "../../features/userSlice";
import { useParams } from "react-router-dom";
import Avatar from "../Utility/Avatar";
import "../../styles/profile.css";
import BookCard from "../utility/BookCard";
import { selectBooks, getBookByIds } from "../../features/bookSilce";
import { selectAuth } from "../../features/authSlice";
import { Link } from "react-router-dom";
import StyledButton from "../Utility/Button";

const User = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const userData = useSelector(selectUser);
  const books = useSelector(selectBooks);
  const userAuth = useSelector(selectAuth);
  const bookIds = userData.booklist

  const isCurrentUser = userAuth.uid === userData.id;


  console.log(books)

  useEffect(() => {
    dispatch(getBookByIds(bookIds));
  }, [bookIds, dispatch]);

  useEffect(() => {
    console.log("In Effect")
    dispatch(getUserByUsername(username));
  }, [username]);
  
  function capitalizeWord(string) {
    if (!string) return "";
    
    const words = string.split(" ");
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
  }
  
  function capitalizeFirstLetter(string) {
    if (!string) return "";
    
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  return (
    <>
    <BannerCard bgImage={userData.profileImage}>
      <div className="profile-container">
        <div className="profile-image">
          <Avatar
            imageUrl={userData.profileImage}
            size={100}
          />
        </div>

        <div className="user-username">
          <h3>{userData.username}</h3>
        </div>

        <div className="user-name">
          <h3>{capitalizeWord(userData.name)}</h3>
        </div>

        <div className="user-bio">
          <p className="info">{capitalizeFirstLetter(userData.bio)}</p>
        </div>

        <div className="user-email">
          <span className="email-header">Email:</span>
          <span className="email">{userData.email}</span>
        </div>

        {isCurrentUser && (
          <div className="user-edit-profile">
            <StyledButton bgColor="var(--light-dark)">
              <Link to="/profile/editprofile" style={{"color":"var(--light)"}}>Edit Profile</Link>
            </StyledButton>
          </div>
        )}

        <div className="user-location">
          <ul>
            <li>{capitalizeFirstLetter(userData.city)}</li>
            <li>{capitalizeFirstLetter(userData.country)}</li>
          </ul>
        </div>
      </div>
    </BannerCard>
    
    <div className="list-header">
        <div className="header-title">
          <h2>Books Created:</h2>
        </div>
      </div>
      <div className="book-list">
        {books.map((book) => (
          <BookCard bookDetails={book} key={book.id} />
        ))}
      </div>
      </>
  );
};

export default User;
