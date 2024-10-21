import { useSpring, animated } from "@react-spring/web";
import { Html } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selector_rooms } from "../../../../features/Room/js/selector";

function HolographicWrapper({ children, width, height, position, rotation }) {
  const currentRoom = useSelector(selector_rooms.currentRoom);
  const childRef = useRef(null);

  const [spring, api] = useSpring(() => ({
    height: 0,
    opacity: 0,
    config: { duration: 600 },
    onRest: ({ value }) => {
      if (value.height == 700) {
        childRef.current.style.display = "block";
      } else {
        childRef.current.style.display = "none";
      }
    },
  }));

  useEffect(() => {
    if (currentRoom == "floor_5") {
      api.start({ height: height, opacity: 1, delay: 700 });
    } else {
      api.start({ height: 0, opacity: 0, delay: 500 });
    }
  }, [currentRoom, api, height]);

  return (
    <Html
      scale={0.1}
      className={`flex flex-col justify-end overflow-hidden `}
      style={{
        width,
        height,
      }}
      position={position}
      rotation={rotation}
      transform={true}
    >
      <animated.div
        className={` font-holographic p-2 text-[#00e8ff] w-full`}
        style={{
          opacity: spring.opacity,
          height: spring.height,
          background: `linear-gradient(0deg,#3ab7ca -1%, #036d7e70 4%, #ffffff00 105%)`,
        }}
      >
        <div ref={childRef} className="w-full h-full">
          {children}
        </div>
      </animated.div>
    </Html>
  );
}

export default HolographicWrapper;
