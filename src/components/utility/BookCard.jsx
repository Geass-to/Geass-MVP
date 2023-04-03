import React from 'react'
import { useNavigate } from "react-router-dom";

const BookCard = ({ bookDetails }) => {

  // console.log(bookDetails)  
  const navigate = useNavigate();

  const handleBookClick = (id) => {
    // console.log(id)
    navigate(`/book/${id}`);
  };

  return (
    
    <div className="book-card" 
    onClick={() => handleBookClick(bookDetails.id)}>
      <div className="book-cover">
        <img src={bookDetails.coverImage} alt="Poster Img" />
      </div>
      <div className="book-info">
        <div className="card-title">
          <h2>{bookDetails.title}</h2>
        </div>
        <span>-{bookDetails.author}</span>
        {/* <span class="read">23</span>
        <span class="stick"> | </span>
        <span class="total">110</span> */}
      </div>
    </div>
  )
}

export default BookCard;
