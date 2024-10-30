import { useGLTF } from "@react-three/drei";
import TableCollider from "./TableColider";
import TableLight from "./TableLight";

function Table() {
  const { nodes, materials } = useGLTF("/models/holographicTable.glb");

  return (
    <group scale={0.4}>
      <mesh
        geometry={nodes.HolograpicTable.geometry}
        material={materials.holoGrapicTable}
        rotation={[0, Math.PI / 2, 0]}
        scale={[3.5, 1.32, 7]}
      />
      <TableCollider />
      <TableLight />
    </group>
  );
}
useGLTF.preload("/holographicTable.glb");
export default Table;
