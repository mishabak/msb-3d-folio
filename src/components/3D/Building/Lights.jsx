import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";
import { selector_rooms } from "../../../features/js/selector";
const AreaLight = ({ w, h, p, r, i = 1.3, currentRoom }) => {
  const lightref = useRef(null);

  useEffect(() => {
    // RectAreaLightUniformsLib.init();
    // const helper = new RectAreaLightHelper(lightref.current);
    // lightref.current.add(helper);
    const intervel = setInterval(() => {
      if (lightref.current) {
        if (lightref.current.intensity < i) {
          lightref.current.intensity += 0.1;
        } else {
          clearInterval(intervel);
        }
      }
    }, 50);

    return () => {
      if (lightref.current) {
        lightref.current.intensity = 0;
      }
      clearInterval(intervel);
    };
  }, [currentRoom]);

  return (
    <rectAreaLight
      ref={lightref}
      width={w || 8}
      height={h || 2}
      intensity={0}
      position={p}
      rotation={r}
      lookAt={[0, 0, 0]}
    />
  );
};

function Lights() {
  const currentRoom = useSelector(selector_rooms.currentRoom);
  switch (currentRoom) {
    case "floor_1":
      return (
        <AreaLight
          currentRoom={currentRoom}
          p={[-4.65, 1.1, 4.8]}
          r={[Math.PI / 2, 0, 0]}
          h={8.2}
          w={11.8}
        />
      );
    case "floor_2":
      return (
        <AreaLight
          currentRoom={currentRoom}
          p={[0.74, 1.1, 4.8]}
          r={[Math.PI / 2, 0, 0]}
          h={8}
          w={8.8}
        />
      );
    case "floor_5":
      return (
        <AreaLight
          currentRoom={currentRoom}
          p={[-4.7, 1.1, -5.04]}
          r={[Math.PI / 2, 0, 0]}
          h={8}
          w={11.3}
          i={0.7}
        />
      );
    default:
      return <></>;
  }
}

export default Lights;
