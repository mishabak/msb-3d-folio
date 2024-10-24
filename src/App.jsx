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
import "./App.css";
import useAudio from "./hooks/useAudio";
import { useEffect } from "react";
import Room from "./features/Room";
import Interior from "./features/Interior";

function App() {
  const { debugMode } = usePhysicDebug();
  const { audio, initialize } = useAudio({ url: "/audio/character/steps.wav" });
  useEffect(() => {
    // initialize()
  }, []);
  
  return (
    <main className="h-screen w-screen">
      <KeyboardControls map={KEYBOARD_MAP}>
        <Canvas style={{background:'black'}}>
          <ambientLight castShadow receiveShadow intensity={0.8} />
          <directionalLight intensity={0.7} />
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[-40, 5, 10]} fov={70} />
          <Physics debug={debugMode}>
            <Character audio={audio} />
            <Room />
            <Interior />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </main>
  );
}

export default App;
