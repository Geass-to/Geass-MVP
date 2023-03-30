import React from "react";

const MediaPlayer = ({ source }) => {
  return (
    <audio controls>
      <source
        src={source}
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  );
};

export default MediaPlayer;
