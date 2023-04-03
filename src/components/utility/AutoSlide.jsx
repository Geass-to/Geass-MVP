import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/AutoScroll.css";

const AutoSlide = () => {
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
            <div className="large-card-bg">
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
                    <button className="readnow">Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="auto-scroll">
            <div className="large-card-bg">
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
                    <button className="readnow">Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="auto-scroll">
            <div className="large-card-bg">
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
                    <button className="readnow">Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="auto-scroll">
            <div className="large-card-bg">
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
                    <button className="readnow">Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AutoSlide;
