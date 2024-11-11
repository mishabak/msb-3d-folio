import HolographicHtml from "./Holographic";
import Table from "../Table";
import { lazy, Suspense } from "react";

const Audio = lazy(() => import("./Audio"));
const KeyboardPad = lazy(() => import("../KeyboardPad"));

function Index() {
  return (
    <group position={[-9.7, 0.837, -11.1]}>
      <Table />
      <HolographicHtml />
      <Suspense>
        <KeyboardPad />
        <Audio />
      </Suspense>
    </group>
  );
}

export default Index;
