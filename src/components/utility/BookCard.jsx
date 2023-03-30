import React from 'react'

const BookCard = ({ bookDetails }) => {
  // console.log(bookDetails)
  return (
    
    <div className="book-card">
      <div className="book-cover">
        <img src={bookDetails.coverImage} alt="Poster Img" />
      </div>
      <div className="book-info">
        <div className="card-title">
          <h2>{bookDetails.title}</h2>
        </div>
        <span>-{bookDetails.bookAuthor}</span>
        {/* <span class="read">23</span>
        <span class="stick"> | </span>
        <span class="total">110</span> */}
      </div>
    </div>
  )
}

export default BookCard;
