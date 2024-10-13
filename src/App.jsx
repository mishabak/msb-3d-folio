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
import { Room } from "./features";
import "./App.css";
import useAudio from "./hooks/useAudio";
import { useEffect } from "react";

function App() {
  const { debugMode } = usePhysicDebug();
  const { audio, initialize } = useAudio({ url: "/audio/character/steps.wav" });
  useEffect(() => {
    initialize()
  },[])
  return (
    <main className="h-screen w-screen">
      <KeyboardControls map={KEYBOARD_MAP}>
        <Canvas>
          <ambientLight intensity={0.7} />
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[-40, 5, 10]} fov={70} />
          <Physics debug={debugMode}>
            <Character audio={audio} />
            <Room />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </main>
  );
}

export default App;
