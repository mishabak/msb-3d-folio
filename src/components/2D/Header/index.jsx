import { useEffect, useState } from "react";
import { ScreenSize } from "../../icons";

function Index() {
  const [a, b] = useState(!!document.fullscreenElement);

  function handleFullscreenChange() {
    b(!!document.fullscreenElement);
  }

  function exitFullscreen() {
    document.fullscreenElement && document.exitFullscreen();
  }

  function handleFullscreen() {
    document.documentElement.requestFullscreen();
  }

  useEffect(() => {
    document.documentElement.requestFullscreen =
      document.documentElement.requestFullscreen ||
      document.documentElement.mozRequestFullScreen ||
      document.documentElement.webkitRequestFullscreen ||
      document.documentElement.msRequestFullscreen;

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <header className="fixed top-0 z-[2] w-full py-4  border-black lg:backdrop-blur-[24px] px-4 lg:bg-[#30303041] flex justify-between items-center">
      <h1 className="font-thin text-white text-xs sm:text-sm lg:text-md">
        MISHAB AK &nbsp;&nbsp;|&nbsp;&nbsp; Full Stack Developer
      </h1>
      {a ? (
        <ScreenSize max={false} onClick={exitFullscreen} />
      ) : (
        <ScreenSize onClick={handleFullscreen} />
      )}
    </header>
  );
}

export default Index;
