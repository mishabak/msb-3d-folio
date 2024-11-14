import Table from "../Table";
import { lazy, Suspense } from "react";
const HolographicHtml = lazy(() => import("./Holographic"));
const Audio = lazy(() => import("./Audio"));
const KeyboardPad = lazy(() => import("../KeyboardPad"));

function Index() {
  return (
    <group position={[-9.7, 0.837, -11.1]}>
      <Table />
      <Suspense>
        <HolographicHtml />
        <KeyboardPad />
        <Audio />
      </Suspense>
    </group>
  );
}

export default Index;
