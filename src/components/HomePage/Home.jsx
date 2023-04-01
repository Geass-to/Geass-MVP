import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../utility/BookCard";
import AutoSlide from "../Utility/AutoSlide";
import "../../styles/booklist.css";
import { getBooks, selectBooks } from "../../features/bookSilce";

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  console.log(books);

  useEffect(() => {
    console.log("ineffect");
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <AutoSlide />
      <div className="list-header">
        <div className="header-title">
          <h2>Trending:</h2>
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

export default Home;
