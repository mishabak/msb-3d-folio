import Spider from "../Spider";
import HolographicHtml from "./Holographic";
import Table from "./Table";
import { HologramTouchPad } from "./HologramTouchPad";

function Index() {
  return (
    <group position={[-9.7, 0.837, -11.1]}>
      <Table />
      <HolographicHtml />
      <HologramTouchPad />
      {/* <Spider /> */}
    </group>
  );
}

export default Index;
