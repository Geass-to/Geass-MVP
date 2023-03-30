import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/bookinfo.css";

const BookInfo = () => {
  const { bookId } = useParams();

  return (
    <>
      <div className="anime-wrapper">
        <div
          className="wallpaper"
          style={{
            backgroundImage:
              "url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/12859-XjlBW6o2YwUb.jpg)",
          }}
        ></div>
        <div className="anime-container">
          <div className="anime">
            <div className="title">One Piece Film: Z</div>
            <div className="poster">
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12859-uQFENDPzMWz6.jpg" />
            </div>
            <div className="description">
              <div className="description-content">
                Said to be comparable to the Ancient Weapons of old, the
                Marines’ trump card, the “Dyna Stones,” have suddenly been
                stolen by a group of renegade vigilantes. The terrifyingly
                powerful man responsible, former Marine Admiral “Z”, now stands
                in the path of Luffy and his Straw Hat Pirates. Can the Straw
                Hats defeat “Z” and his crew, or will the New World meet its end
                at the hands of this mad man? <br />
                <br />
                (Source: Funimation)
              </div>
            </div>
            <div className="total-episodes">
              Author: <span>pikachu</span>
            </div>
          </div>
        </div>
      </div>

      <audio controls>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/audio%2FFinal.mp3?alt=media&token=1ffc9cf9-a632-4efc-b92d-e001bef23abb"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default BookInfo;
