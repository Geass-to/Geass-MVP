import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/AutoScroll.css";
import { useNavigate } from "react-router-dom";

const AutoSlide = () => {
  const navigate = useNavigate();

  const slide1 = () => {
    navigate(`/book/VD2tssSrgr4tsVe7NlVS`);
  };
  const slide2 = () => {
    navigate(`/book/s0s1wPC1KSqqgXAR1WWI`);
  };
  const slide3 = () => {
    navigate(`/book/LzL01ZLjFTgguixpQ7YL`);
  };
  const slide4 = () => {
    navigate(`/book/`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    afterChange: function (index) {
      // console.log(
      //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      // );
    },
    responsive: [
      {
        breakpoint: 912,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div classNameName="autoscroll">
      <Slider {...settings}>
        <div>
          <div className="auto-scroll">
            <div className="large-card-bg" style={{backgroundImage:"url(https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2022/11/eminence-in-shadow-fi.jpg)"}}>
              <div className="large-shade">
                <div className="poster-container">
                  <div className="poster">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/images%2F815XJ4qFJfL.jpg6d2d3b3a-4cbe-4fe1-912b-e7f54121bdc9?alt=media&token=39e2dfb0-08c1-4e2e-839f-d98f311f10fd"
                      alt=""
                    />
                  </div>
                  <div className="large-card-details-1">
                    <h3>The Eminence In Shadow</h3>
                    <p className="info">
                    Even in his past life, Cid's dream wasn't to become a protagonist or a final boss. He'd rather lie low as a minor character until it's prime time to reveal he's a mastermind...or at least, do the next best thing-pretend to be one! And now that he's been reborn into another world, he's ready to set the perfect conditions to live out his dreams to the fullest. Armed with his overactive imagination, Cid jokingly recruits members to his organization and makes up a whole backstory about an evil cult that they need to take down. Well, as luck would have it, these imaginary adversaries turn out to be the real deal-and everyone knows the truth but him!
                    </p>
                  </div>
                  <div className="large-card-details-2">
                    <span className="status">Releasing</span>
                    <span className="volume">VOL-1</span>
                    <br />
                    <ul>
                      <li>Action</li>
                      <li>Comedy</li>
                      <li>Military</li>
                    </ul>
                    <br />
                  </div>
                  <div className="large-card-details-3">
                    <button className="readnow" onClick={slide1}>Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="auto-scroll">
            <div className="large-card-bg" style={{backgroundImage:"url(https://images6.alphacoders.com/112/1128080.jpg)"}} >
              <div className="large-shade">
                <div className="poster-container">
                  <div className="poster">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/images%2Fmushoku-tensei-jobless-reincarnation-light-novel-vol-1-1.jpga70c40c3-530b-430a-8636-d6df85186fae?alt=media&token=6060fe3d-bcef-46b9-8359-1d892cc72971"
                      alt=""
                    />
                  </div>
                  <div className="large-card-details-1">
                    <h3>Mushoku Tensei: Jobless Reincarnation</h3>
                    <p className="info">
                    Mushoku Tensei: Jobless Reincarnation (無職転生 〜異世界行ったら本気だす〜 Mushoku Tensei: Isekai Ittara Honki Dasu) is a series of high fantasy light novel written by Japanese author Rifujin na Magonote featuring illustrations by Shirotaka. Set in a fictional swords and sorcery-styled world known as the Six-Faced World, the story follows a jobless recluse getting involved in a traffic accident who ends up getting reincarnated as Rudeus Greyrat, son of a village knight and a healer.
                    </p>
                  </div>
                  <div className="large-card-details-2">
                    <span className="status">Releasing</span>
                    <span className="volume">VOL-1</span>
                    <br />
                    <ul>
                      <li>Drama</li>
                      <li>Comedy</li>
                      <li>Fantasy</li>
                    </ul>
                    <br />
                  </div>
                  <div className="large-card-details-3">
                    <button className="readnow" onClick={slide2}>Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="auto-scroll">
            <div className="large-card-bg" style={{backgroundImage:"url(https://de7i3bh7bgh0d.cloudfront.net/2021/03/19/20/55/16/5dec7da0-d5d8-4cad-80a0-df612717b1a7/BleachCFYOW_blogsplash_1200x630.jpg)"}} >
              <div className="large-shade">
                <div className="poster-container">
                  <div className="poster">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/geass-8fac8.appspot.com/o/images%2F818YYxqpQuL.jpg8152a67a-1206-4c0e-b551-cf10163e2548?alt=media&token=168f9c87-14e1-41ec-929f-f9b7373d8f1e"
                      alt=""
                    />
                  </div>
                  <div className="large-card-details-1">
                    <h3>BLEACH Can’t Fear Your Own World</h3>
                    <p className="info">
                    As head of the Seireitei Communication, Hisagi uses his journalistic skills to investigate when there is an attempted assassination aimed at the four great Noble Houses. An unknown Shinigami attacks the Quincy and the Arrancar that survived in Hueco Mundo. And with a rapidly growing, mysterious religious group in the Human World, there is turmoil in each of the three main realms of existence.
                    </p>
                  </div>
                  <div className="large-card-details-2">
                    <span className="status">Releasing</span>
                    <span className="volume">VOL-1</span>
                    <br />
                    <ul>
                      <li>Fiction</li>
                      <li>Fantasy</li>
                      <li>Adventure</li>
                    </ul>
                    <br />
                  </div>
                  <div className="large-card-details-3">
                    <button className="readnow" onClick={slide3}>Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div>
          <div className="auto-scroll">
            <div className="large-card-bg" style={{backgroundImage:"url()"}} >
              <div className="large-shade">
                <div className="poster-container">
                  <div className="poster">
                    <img
                      src="https://kbimages1-a.akamaihd.net/29216134-5f0b-4080-a492-4a58461f91f1/353/569/90/False/86-eighty-six-vol-4-light-novel.jpg"
                      alt=""
                    />
                  </div>
                  <div className="large-card-details-1">
                    <h3>86 -Eighty Six-</h3>
                    <p className="info">
                      According to the Republic of San Magnolia, their ongoing
                      war against the Giadian Empire has no casualties—however,
                      that is mere propaganda. While the silver-haired Alba of
                      the Republic's eighty-five sectors live safely behind
                      protective walls, those of different appearances are
                      interned in a secret eighty-sixth faction. Known within
                      the military as the Eighty-Six, they are forced to fight
                      against the Empire's autonomous Legion under the command
                      of the Republican "Handlers."
                    </p>
                  </div>
                  <div className="large-card-details-2">
                    <span className="status">Releasing</span>
                    <span className="volume">VOL-11</span>
                    <br />
                    <ul>
                      <li>Action</li>
                      <li>Mech</li>
                      <li>Military</li>
                    </ul>
                    <br />
                  </div>
                  <div className="large-card-details-3">
                    <button className="readnow" onClick={slide4}>Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div>*/}
      </Slider>
    </div>
  );
};

export default AutoSlide;
