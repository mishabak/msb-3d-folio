import { selector_rooms } from "../../../../features/js/selector";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useMemo, useRef } from "react";
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
  const [spring, api] = useSpring(() => ({
    height: 0,
    opacity: 0,
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
      api.start({
        height: height,
        opacity: 1,
        delay: 1800,
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
  }, [currentRoom]);

  const Particles = useMemo(() => {
    return <CustomParticles id={id} />;
  }, []);

  return (
    <Html
      occlude={"blending"}
      scale={0.1}
      className={`h-auto w-auto ring-1 ring-black`}
      position={position}
      rotation={rotation}
      transform={true}
    >
      {Particles}
      <div
        className={`flex flex-col justify-end overflow-hidden`}
        style={{
          width: width,
          height: height,
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
