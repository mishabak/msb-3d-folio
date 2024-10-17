import { RigidBody } from "@react-three/rapier";
import Spider from "../Spider";
import HolographicHtml from "./Holographic";
import Table from "./Table";

function Index() {
  return (
    <group   position={[-9.7, 0.837, -11.1]}>
      <Table />
      <HolographicHtml />
      {/* <Spider /> */}
    </group>
  );
}

export default Index;
