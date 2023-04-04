import React, { useEffect } from "react";
import BookCard from "../utility/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookByName, selectBooks } from "../../features/bookSilce";
import { useParams } from "react-router-dom";
import "../Search/search.css";
import { analytics } from "../../config/firebase";
import { logEvent } from "firebase/analytics";

const SearchResults = () => {
  const { searchquery } = useParams();

  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  // console.log(books);
  useEffect(() => {
    //LogEvents for Search
    logEvent(analytics, "search", { search_term: searchquery });

    dispatch(getBookByName(searchquery));
  }, [dispatch, searchquery]);

  return (
    <div className="search-results-container">
      <div className="list-header">
        <div className="header-title">
          <h2>Search results for "{searchquery}"</h2>
        </div>
      </div>
      {books.length ? (
        <div className="book-list">
          {books.map((book) => (
            <BookCard bookDetails={book} key={book.id} />
          ))}
        </div>
      ) : (
        <div id="no-results">
          <h3>No results found for "{searchquery}"</h3>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
