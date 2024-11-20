import { lazy, Suspense } from "react";
const HolographicHtml = lazy(() => import("./Holographic"));
const Table = lazy(() => import("../Table"));
const Audio = lazy(() => import("./Audio"));
const KeyboardPad = lazy(() => import("../KeyboardPad"));

function Index() {
  return (
    <group position={[-9.7, 0.837, -11.1]}>
      <Suspense fallback={null}>
        <Table />
        <HolographicHtml />
        <KeyboardPad />
        <Audio />
      </Suspense>
    </group>
  );
}

export default Index;
