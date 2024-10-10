import { node } from "prop-types";
import { Canvas } from "@react-three/fiber";
import {
  KeyboardControls,
  OrbitControls,
  PerspectiveCamera,
  Sky,
} from "@react-three/drei";
function Layout({ children }) {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["wArrowDown", "KeyS"] },
    { name: "left", keys: ["ArrowLeft", "KeyA"] },
    { name: "right", keys: ["ArrowRight", "KeyD"] },
    { name: "run", keys: ["Shift"] },
  ];
  return (
    <main className="h-screen w-screen">
      <KeyboardControls map={keyboardMap}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[-40, 5, 10]} fov={70} />
          <ambientLight intensity={0.7} />
          <Sky />
          <OrbitControls  />
          {children}
        </Canvas>
      </KeyboardControls>
    </main>
  );
}

Layout.propTypes = {
  children: node,
};
export default Layout;
