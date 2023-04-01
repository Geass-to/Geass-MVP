import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/bookinfo.css";
import MediaPlayer from "./MediaPlayer";
import { useDispatch, useSelector } from "react-redux";
import { getBookById, selectSingleBook, selectBooks } from "../../features/bookSilce";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookInfo = () => {

  const navigate = useNavigate();
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const book =
  books.find((book) => book.id === bookId) || useSelector(selectSingleBook);
  
  useEffect(() => {
    if (!book) {
      console.log("In Effect");
      dispatch(getBookById(bookId));
    }
  }, [book, bookId, dispatch]);
  
  if (!book) {
    return <div>Loading...</div>;
  }
  
  let bookCoverImg = `url(${book.coverImage})`
  return (
    <>
      <div className="anime-wrapper">
        <div
          className="wallpaper"
          style={{
            backgroundImage: bookCoverImg,
          }}
        ></div>
        <div className="anime-container">
          <div className="anime">
            <div className="title">{book.title}</div>
            <div className="poster">
              <img src={book.coverImage} />
            </div>
            <div className="description">
              <div className="description-content">{book.description}</div>
            </div>
            <div className="total-episodes">
              Author: <span>{book.author}</span> <br />
              <span onClick={() => navigate(`/uid/${book.userUid}`)}>Visit created user</span>
              {/* <Link to={`/uid/${book.userUid}`} style={{"color":"var(--light)"}}>Created user</Link> */}
            </div>
            {/* div.createdUser */}
          </div>
        </div>
      </div>

      <MediaPlayer className="media-element" src={book.audioFile} />
    </>
  );
};

export default BookInfo;
