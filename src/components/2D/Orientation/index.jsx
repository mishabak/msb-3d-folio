import { useEffect, useRef } from "react";

function Index() {
  const orientationRef = useRef(null);

  const handleOrientation = () => {
    if (screen.orientation?.angle == 90 || screen.orientation?.angle == 270) {
      orientationRef.current.style.display = "none";
    } else {
      orientationRef.current.style.display = "flex";
    }
  };

  useEffect(() => {
    window.addEventListener("orientationchange", handleOrientation);
    return () =>
      window.removeEventListener("orientationchange", handleOrientation);
  }, []);

  return (
    <div
      ref={orientationRef}
      className="w-full h-full fixed top-0 bg-black text-white z-[3] flex justify-center items-center text-center"
    >
      <div>
        <p className="text-lg font-semibold">Please rotate your device</p>
        <p className="mt-2 text-sx font-thin">
          For the best experience, use landscape mode.
        </p>
      </div>
    </div>
  );
}

export default Index;
