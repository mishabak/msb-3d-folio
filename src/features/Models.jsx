import usePhysicDebug from "../hooks/usePhysicDebug";
import { Physics } from "@react-three/rapier";
import { lazy, Suspense } from "react";
import Room from "./Room";

const Interior = lazy(() => import("../features/Interior"));
const Character = lazy(() => import("../components/3D/Character"));
function Models() {
  const { debugMode } = usePhysicDebug();

  return (
    <Physics debug={debugMode}>
      <Room />
      <Suspense fallback={null}>
        <Character />
        <Interior />
      </Suspense>
    </Physics>
  );
}

export default Models;
