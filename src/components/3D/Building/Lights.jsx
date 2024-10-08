import { useEffect, useRef } from "react";

import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

const Room1 = () => {
  // light for first room
  return (
    <group>
      {[
        { p: [-2.26, 1.03, 4.8], r: [1.571, -0.3, 1.57] },
        { p: [-6.9, 1.03, 4.8], r: [1.571, 0.3, 1.57] },
        { p: [-4.65, 1.03, 2.8], r: [Math.PI / 2 - 0.3, 0, Math.PI] },
        { p: [-4.65, 1.03, 6.8], r: [Math.PI / 2 + 0.3, 0, Math.PI] },
        { p: [-4.65, 20, 5.1], r: [Math.PI / 2, Math.PI, 0], w: 4, h: 2 },
      ].map(({ p, r, h, w }, ix) => (
        <rectAreaLight
          key={ix}
          width={w || 8}
          height={h || 2}
          intensity={3}
          position={p}
          rotation={r}
        />
      ))}
    </group>
  );
};
function Lights() {
  const lightref = useRef();
  useEffect(() => {
    // Initialize the RectAreaLightUniformsLib
    // RectAreaLightUniformsLib.init();
    // Optional: Add the RectAreaLightHelper for debugging
    // const helper = new RectAreaLightHelper(lightref.current);
    // lightref.current.add(helper);
  }, []);
  return (
    <group>
      <Room1 />
    </group>
  );
}

export default Lights;
