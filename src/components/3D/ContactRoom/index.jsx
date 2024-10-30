import HolographicHtml from "./Holographic";
import Table from "../Table";
import { KeyboardPad } from "..";
import Audio from "./Audio";

function Index() {
  return (
    <group position={[-9.7, 0.837, -11.1]}>
      <Table />
      <HolographicHtml />
      <KeyboardPad />
      <Audio />
    </group>
  );
}

export default Index;
