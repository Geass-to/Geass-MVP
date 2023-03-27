import React from 'react'

const BookCard = ({ bookDetails }) => {
  return (
    <div className="book-card">
        <div className="book-cover">
            <img src="" alt="" />
        </div>
        <div className="book-title">
            {bookDetails.bookTitle}
        </div>
        <div className="book-author">
            {bookDetails.bookAuthor}
        </div>
    </div>
  )
}

export default BookCard;
