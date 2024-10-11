import { useMemo } from "react";

function usePhysicDebug() {
  const debugMode = useMemo(
    () => import.meta.env.VITE_APP_PHYSICS_DEBUG === "true",
    []
  );
  return { debugMode };
}

export default usePhysicDebug;
