import React, { useEffect, useRef } from "react";

function Video({ muted = true, className }) {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
    }
  }, []);
  return (
    <video
      ref={videoRef}
      className={`absolute z-[-1]  w-full ${className}`}
      src="/video/hacker wallpaper video download.mp4"
      autoPlay
      muted={muted}
      playsInline
    />
  );
}

export default Video;
