import { useEffect } from "react";

function Index() {
  useEffect(() => {
    document.documentElement.requestFullscreen =
      document.documentElement.requestFullscreen ||
      document.documentElement.mozRequestFullScreen ||
      document.documentElement.webkitRequestFullscreen ||
      document.documentElement.msRequestFullscreen;
  }, []);
  return (
    <header className="fixed top-0 z-[2] lg:w-full py-4  border-black lg:backdrop-blur-[24px] px-4 lg:bg-[#30303041]">
      <h1 className="font-thin text-white text-xs sm:text-sm lg:text-md">
        MISHAB AK &nbsp;&nbsp;|&nbsp;&nbsp; Full Stack Developer
      </h1>
    </header>
  );
}

export default Index;
