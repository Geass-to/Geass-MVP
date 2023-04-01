import React from "react";
import BookCard from "../utility/BookCard";

const SearchResults = () => {

  const books1 = [
    {
        coverImage: "https://i.scdn.co/image/ab67616d000048517f63f3d6c8b925a74145eb24",
        title: "title",
        author: "author name"
    }
  ]
  return (
    <div className="search-results-container">
      <div className="list-header">
        <div className="header-title">
          <h2>Search results for</h2>
        </div>
      </div>
      <div className="book-list">
        {books1.map((book) => (
          <BookCard bookDetails={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
