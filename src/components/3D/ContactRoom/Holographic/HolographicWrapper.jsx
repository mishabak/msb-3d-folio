import { selector_rooms } from "../../../../features/js/selector";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Html } from "@react-three/drei";
import { CustomParticles } from "../../../2D";

function HolographicWrapper({
  children,
  width,
  height,
  position,
  rotation,
  id,
}) {
  const currentRoom = useSelector(selector_rooms.currentRoom);
  const childRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [spring, api] = useSpring(() => ({
    height: 0,
    opacity: 0,
    onRest: ({ value }) => {
      if (value.height == 700) {
        childRef.current.style.display = "block";
      } else {
        setVisible(false);
        childRef.current.style.display = "none";
      }
    },
  }));

  useEffect(() => {
    if (currentRoom == "floor_5") {
      setVisible(true);
      api.start({
        height: height,
        opacity: 1,
        delay:1800,
        config: { duration: 600 },
      });
    } else {
      api.start({
        height: 0,
        opacity: 0,
        delay: 500,
        config: { duration: 600 },
      });
    }
  }, [currentRoom, api, width, height]);

  return (
    <Html
      occlude={'blending'}
      scale={0.1}
      className={`h-auto w-auto bg-black ring-black ring-1`}
      position={position}
      rotation={rotation}a
      transform={true}
    >
      <CustomParticles id={id} />
      <div
        className={`flex flex-col justify-end overflow-hidden`}
        style={{
          width: visible ? width : 0,
          height: visible ? height : 0,
        }}
      >
        <animated.div
          className={` font-holographic p-2 text-[#00e8ff] w-full overflow-hidden`}
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
      </div>
    </Html>
  );
}

export default HolographicWrapper;
