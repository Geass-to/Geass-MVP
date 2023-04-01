import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/bookinfo.css";
import MediaPlayer from "./MediaPlayer";
import { useDispatch, useSelector } from "react-redux";
import { getBook, selectSingleBook } from "../../features/bookSilce";
import { useEffect } from "react";

const BookInfo = () => {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(selectSingleBook);
  // const book = books[0]
  console.log(book)
  useEffect(() => {
    console.log("In Effect");
    dispatch(getBook(bookId));
  }, [bookId])

  return (
    <>
      <div className="anime-wrapper">
        <div
          className="wallpaper"
          style={{
            backgroundImage: "url(https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12859-uQFENDPzMWz6.jpg)",
          }}
        ></div>
        <div className="anime-container">
          <div className="anime">
            <div className="title">{book.title}</div>
            <div className="poster">
              <img src={book.coverImage} />
            </div>
            <div className="description">
              <div className="description-content">
                {book.description}
              </div>
            </div>
            <div className="total-episodes">
              Author: <span>{book.author}</span>
            </div>
          </div>
        </div>
      </div>

      <MediaPlayer
        className="media-element"
        src={book.audioFile}
      />
    </>
  );
};

export default BookInfo;
