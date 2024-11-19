import { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import { throttle } from "lodash";
import { RopeWave } from "./RopeWave";
import { action_rooms } from "../../../features/js/slice";
import { useDispatch } from "react-redux";

function Index({ isLoaded }) {
  const [animate, setAnimation] = useState(false);
  const bounce = useDebounce(animate, 2300);
  const cursorRef = useRef(null);
  const dispatch = useDispatch();

  const handleStart = () => {
    dispatch(action_rooms.setIsIntroPage(false));
    window.isIntroPage = false;
  };

  useEffect(() => {
    if (bounce[0]) {
      handleStart();
    }
  }, [bounce]);

  const handleMouseMove = useCallback(
    throttle((e) => {
      if (cursorRef.current) {
        cursorRef.current.style.marginLeft = e.clientX + "px";
        cursorRef.current.style.marginTop = e.clientY + "px";
      }
    }, 300),
    []
  );

  useEffect(() => {
    addEventListener("mousemove", handleMouseMove);
    return () => {
      removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function handleBtnClick() {
    if (isLoaded) {
      const el = document.documentElement;
      if (el.requestFullscreen) el.requestFullscreen();
      setAnimation(true);
    }
  }

  return (
    <div
      className={`h-full w-full bg-white  text-white flex justify-between introPage ${
        animate ? "intro-page-animate" : ""
      } `}
    >
      <div
        ref={cursorRef}
        className="bg-[#0080750e] w-10 h-10 rounded-full fixed z-10 top-0 left-0 duration-500 shadow-sm shadow-white backdrop-blur-sm"
      />
      <div className="h-full w-1/5 percepective-350">
        <div
          className={`bg-black w-full h-full  origin-left flex items-center  ${
            animate ? `face-left` : ``
          }`}
        >
          <RopeWave.Wave1 />
        </div>
      </div>

      <div className="w-3/5 percepective-350">
        <div
          className={` pt-[77px] bg-black h-1/2 origin-top  flex justify-between flex-col ${
            animate ? `face-top` : ``
          }`}
        >
          <div className="text-center text-[33px] font-thin underline underline-offset-8 decoration-[0.5px]">
            P O R T F O L I O
          </div>
          <RopeWave.Wave2 />
        </div>

        <div
          className={` bg-black h-1/2 origin-bottom flex flex-col  ${
            animate ? `face-bottom` : ``
          }`}
        >
          <button
            className=" bg-[#d10b4b] w-[300px] py-4 ml-auto mr-auto mt-auto text-white font-semibold rounded-md animate-pulse"
            onClick={handleBtnClick}
          >
            {isLoaded ? "START " : "LOADING..."}
          </button>
          <div className="mt-auto mb-8">
            <h5 className="text-center">
              <strong>Project Development Status</strong>
            </h5>
            <div className="font-thin mt-3 pl-5 text-center max-w-[650px] ml-auto mr-auto">
              The first and last rooms of the experience are complete! Other
              sections are still under development. Stay tuned as I continue
              working on bringing this project to life.
            </div>
          </div>
        </div>
      </div>

      <div className={`h-full w-1/5 percepective-350`}>
        <div
          className={`bg-black w-full h-full origin-right   ${
            animate ? `face-right` : ``
          }`}
        >
          <div className="pt-[57px] pr-3">
            <h3 className="text-[28px] font-bold mt-[60px]">Controls</h3>
            <div className="border-b-[0.5px] mt-1 border-[#525252] w-full" />

            <ul className="mt-8 pl-3">
              <li className="text-[18px] font-semibold">Character</li>

              <li className="text-[16px] font-thin mt-3 pl-5">
                <strong>Forward</strong> :&nbsp;&nbsp; W , ↑ (Arrow Up)
              </li>
              <li className="text-[16px] font-thin mt-2 pl-5">
                <strong>Backward</strong> :&nbsp;&nbsp; S , ↓ (Arrow Down)
              </li>
              <li className="text-[16px] font-thin mt-2 pl-5">
                <strong>Left</strong> :&nbsp;&nbsp; A , ← (Arrow Left)
              </li>
              <li className="text-[16px] font-thin mt-2 pl-5">
                <strong>Right</strong> :&nbsp;&nbsp; D , → (Arrow Right)
              </li>
            </ul>

            <ul className="mt-8 pl-3">
              <li className="text-[18px] font-semibold">Door</li>

              <li className="text-[16px] font-thin mt-3 pl-5">
                Solve the puzzle to unlock the door! Click on the door with your
                mouse pointer to open it. once the puzzle is completed.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
