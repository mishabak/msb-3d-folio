import {
  KeyboardControls,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import usePhysicDebug from "./hooks/usePhysicDebug";
import { KEYBOARD_MAP } from "./util/constants";
import { Physics } from "@react-three/rapier";
import "./App.css";
import { Fragment, lazy, Suspense, useEffect, useMemo } from "react";
import { selector_rooms } from "./features/js/selector";
import { Header, IntroPage } from "./components/2D";
import { useSelector } from "react-redux";
import Room from "./features/Room";

const Interior = lazy(() => import("./features/Interior"));
const Character = lazy(() => import("./components/3D/Character"));

window.isIntroPage = true;
function ThreeCanvas() {
  const { debugMode } = usePhysicDebug();
  const canvasChild = useMemo(() => {
    return (
      <Fragment>
        <ambientLight intensity={0.6} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <OrbitControls enabled={false} />
          <PerspectiveCamera makeDefault position={[-15, 1.747, 10]} fov={55} />
        </Suspense>
        <Physics debug={debugMode}>
          <Room />
          <Suspense fallback={null}>
            <Character />
            <Interior />
          </Suspense>
        </Physics>
      </Fragment>
    );
  }, [debugMode]);

  return canvasChild;
}

function App() {
  const isIntroPage = useSelector(selector_rooms.isIntroPage);

  return (
    <main className="h-screen w-screen">
      <Header />
      {isIntroPage ? (
        <IntroPage isLoaded={true} />
      ) : (
        <KeyboardControls map={KEYBOARD_MAP}>
          <Canvas className="canvas-animation">
            <ThreeCanvas />
          </Canvas>
        </KeyboardControls>
      )}
    </main>
  );
}

export default App;
