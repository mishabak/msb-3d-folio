import { useEffect, useRef } from "react";

import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

const AreaLight = ({ w, h, p, r }) => {
  const lightref = useRef();
  useEffect(() => {
    // Initialize the RectAreaLightUniformsLib
    // RectAreaLightUniformsLib.init();
    // Optional: Add the RectAreaLightHelper for debugging
    // const helper = new RectAreaLightHelper(lightref.current);
    // lightref.current.add(helper);
  }, []);

  return (
    <rectAreaLight
      ref={lightref}
      width={w || 8}
      height={h || 2}
      intensity={3}
      position={p}
      rotation={r}
    />
  );
};

const Room1 = () => {
  return (
    <group>
      {[
        { p: [-2.26, 1.03, 4.8], r: [1.571, -0.3, 1.57] },
        { p: [-6.9, 1.03, 4.8], r: [1.571, 0.3, 1.57] },
        { p: [-4.65, 1.03, 2.8], r: [Math.PI / 2 - 0.3, 0, Math.PI] },
        { p: [-4.65, 1.03, 6.8], r: [Math.PI / 2 + 0.3, 0, Math.PI] },
        { p: [-4.65, 20, 5.1], r: [Math.PI / 2, Math.PI, 0], w: 4, h: 2 },
      ].map(({ p, r, h, w }, ix) => (
        <AreaLight p={p} r={r} h={h} w={w} key={ix} />
      ))}
    </group>
  );
};

const Room2 = () => {
  return (
    <group>
      {[
        { p: [2.6, 1.03, 4.8], r: [1.571, -0.3, 1.57] },
        { p: [-1.15, 1.03, 4.8], r: [1.571, 0.3, 1.57] },
        { p: [0.7, 1.03, 2.8], r: [Math.PI / 2 - 0.3, 0, Math.PI],w:6 },
        { p: [0.7, 1.03, 6.8], r: [Math.PI / 2 + 0.3, 0, Math.PI],w:6 },
        { p: [1.1, 20, 5.1], r: [Math.PI / 2, Math.PI, 0], w: 4, h: 2 },
      ].map(({ p, r, h, w }, ix) => (
        <AreaLight p={p} r={r} h={h} w={w} key={ix} />
      ))}
    </group>
  );
};

function Lights() {
  return (
    <group>
      <Room1 />
      <Room2 />
    </group>
  );
}

export default Lights;
