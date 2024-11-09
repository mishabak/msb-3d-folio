import {
  OrbitControls,
  KeyboardControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import usePhysicDebug from "./hooks/usePhysicDebug";
import { KEYBOARD_MAP } from "./util/constants";
import { Character } from "./components/3D";
import Interior from "./features/Interior";
import Room from "./features/Room";
import "./App.css";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Header, IntroPage } from "./components/2D";
import { useSelector } from "react-redux";
import { selector_rooms } from "./features/js/selector";
window.isIntroPage = true;

function ThreeCanvas({ isIntroPage }) {
  const { debugMode } = usePhysicDebug();

  const canvasChild = useMemo(
    () => (
      <Fragment>
        <ambientLight castShadow receiveShadow intensity={0.8} />
        <directionalLight intensity={0.7} />
        <OrbitControls />
        <PerspectiveCamera makeDefault position={[-40, 5, 10]} fov={70} />
        <Physics debug={debugMode}>
          <Character />
          <Room />
          <Interior />
        </Physics>
      </Fragment>
    ),
    []
  );

  return (
    <KeyboardControls map={KEYBOARD_MAP}>
      <Canvas
        className={`${!isIntroPage ? "canvas-animation" : ""}`}
        style={{
          backgroundColor: "black",
          visibility: !isIntroPage ? "visible" : "hidden",
          position: "fixed",
          zIndex: 1,
        }}
      >
        {canvasChild}
      </Canvas>
    </KeyboardControls>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isIntroPage = useSelector(selector_rooms.isIntroPage);
  const { progress } = useProgress();

  useEffect(() => {
    progress === 100 && setIsLoaded(true);
  }, [progress]);

  const threeCanvas = useMemo(
    () => <ThreeCanvas isIntroPage={isIntroPage} />,
    [isIntroPage]
  );

  return (
    <main className="h-screen w-screen">
      <Header />
      {isIntroPage && <IntroPage isLoaded={isLoaded} />}
      {threeCanvas}
    </main>
  );
}

export default App;
