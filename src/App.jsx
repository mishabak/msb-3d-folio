import { KeyboardControls, useProgress } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import usePhysicDebug from "./hooks/usePhysicDebug";
import { KEYBOARD_MAP } from "./util/constants";
import "./App.css";
import { Fragment, lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Header } from "./components/2D";
import { useSelector } from "react-redux";
import { selector_rooms } from "./features/js/selector";
const Interior = lazy(() => import("./features/Interior"));
const Character = lazy(() => import("./components/3D/Character"));
const Room = lazy(() => import("./features/Room"));
const IntroPage = lazy(() => import("./components/2D/Intro"));
const Canvas = lazy(() =>
  import("@react-three/fiber").then((module) => ({
    default: module.Canvas,
  }))
);
const PerspectiveCamera = lazy(() =>
  import("@react-three/drei").then((module) => ({
    default: module.PerspectiveCamera,
  }))
);
const OrbitControls = lazy(() =>
  import("@react-three/drei").then((module) => ({
    default: module.OrbitControls,
  }))
);

window.isIntroPage = true;
function ThreeCanvas({ isIntroPage }) {
  const { debugMode } = usePhysicDebug();

  const canvasChild = useMemo(
    () => (
      <Fragment>
        <ambientLight castShadow receiveShadow intensity={0.8} />
        <directionalLight intensity={0.7} />
        <Suspense>
          <OrbitControls />
          <PerspectiveCamera makeDefault position={[-40, 5, 10]} fov={70} />
        </Suspense>
        <Physics debug={debugMode}>
          <Suspense>
            <Character />
            <Room />
            <Interior />
          </Suspense>
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
      <Suspense>{isIntroPage && <IntroPage isLoaded={isLoaded} />}</Suspense>

      {threeCanvas}
    </main>
  );
}

export default App;
