import React from "react";
import BookCard from "../utility/BookCard";

const SearchResults = () => {

  const books1 = [
    {
        coverImage: "ds",
        title: "title",
        author: "author name"
    }
  ]
  return (
    <>
      <div className="list-header">
        <div className="header-title">
          <h2>Trending:</h2>
        </div>
      </div>
      <div className="book-list">
        {books1.map((book) => (
          <BookCard bookDetails={book} key={book.id} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
