import { bool, func, number, string } from "prop-types";
import { useEffect, useRef } from "react";

function Video({ muted = true, className, videoCallback = () => {}, id = 0 }) {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1;
    }
  }, []);

  return (
    <video
      onEnded={() => {
        videoCallback(id);
        videoRef.current.style.display = "none";
      }}
      ref={videoRef}
      className={`absolute z-[-1]  w-full ${className}`}
      src="/video/hacker wallpaper video download.mp4"
      autoPlay
      muted={muted}
      playsInline
    />
  );
}

Video.propTypes = {
  muted: bool,
  className: string,
  videoCallback: func,
  id: number,
};

export default Video;
