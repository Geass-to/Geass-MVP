import React from 'react'

const BookCard = ({ bookDetails }) => {
  return (
    // <div className="book-card">
    //     <div className="book-cover">
    //         <img src="" alt="" />
    //     </div>
    //     <div className="book-title">
    //         {bookDetails.bookTitle}
    //     </div>
    //     <div className="book-author">
    //         {bookDetails.bookAuthor}
    //     </div>
    // </div>

    <div className="book-card">
      <div className="book-cover">
        <img src={bookDetails.bookCoverImg} alt="Poster Img" />
      </div>
      <div className="book-info">
        <div className="card-title">
          <h2>{bookDetails.bookTitle}</h2>
        </div>
        <span>{bookDetails.bookAuthor}</span>
        {/* <span class="read">23</span>
        <span class="stick"> | </span>
        <span class="total">110</span> */}
      </div>
    </div>
  )
}

export default BookCard;
