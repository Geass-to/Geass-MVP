// import React from "react";

// const MediaPlayer = ({ source }) => {
//   return (
//     <audio controls>
//       <source
//         src={source}
//         type="audio/mpeg"
//       />
//       Your browser does not support the audio element.
//     </audio>
//   );
// };

// export default MediaPlayer;
import React, { useState, useRef } from "react";
import "./mediaelement.css";

function MediaPlayer({ src }) {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFastForwardClick = () => {
    audioRef.current.currentTime += 15;
  };

  const handleFastBackwardClick = () => {
    audioRef.current.currentTime -= 15;
  };

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
    audioRef.current.volume = parseFloat(event.target.value);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event) => {
    audioRef.current.currentTime = parseFloat(event.target.value);
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="audio-element">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      {/* <div> */}
      <div className="audio-range-wrapper">
        <center>
          <input
            className="audio-range"
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
        </center>
      </div>
      <div className="duration-wrapper">
        <div className="current-duration">{formatTime(currentTime)}</div>
        <div className="total-duration">{formatTime(duration)}</div>
      </div>

      <div className="button-wrapper">
        <center>
          <button className="backward-btn" onClick={handleFastBackwardClick}>
            -15s
          </button>
          <button className="play-pause" onClick={handlePlayPauseClick}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button className="forward-btn" onClick={handleFastForwardClick}>
            <i className="fa-duotone fa-forward"></i>
          </button>
        </center>
      </div>
      {/* </div> */}

      {/* <input
          className="volume-rance"
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
        /> */}
    </div>
  );
}

export default MediaPlayer;
