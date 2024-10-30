import {
  OrbitControls,
  KeyboardControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import usePhysicDebug from "./hooks/usePhysicDebug";
import { KEYBOARD_MAP } from "./util/constants";
import { Character } from "./components/3D";
import Interior from "./features/Interior";
import Room from "./features/Room";
import "./App.css";

function App() {
  const { debugMode } = usePhysicDebug();

  return (
    <main className="h-screen w-screen">
      <KeyboardControls map={KEYBOARD_MAP}>
        <Canvas style={{ backgroundColor: "black" }}>
          <ambientLight castShadow receiveShadow intensity={0.8} />
          <directionalLight intensity={0.7} />
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[-40, 5, 10]} fov={70} />
          <Physics debug={debugMode}>
            <Character />
            <Room />
            <Interior />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </main>
  );
}

export default App;
