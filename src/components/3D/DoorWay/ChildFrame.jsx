import { RigidBody } from "@react-three/rapier";
import { object } from "prop-types";

function ChildFrame({ nodes, materials }) {
  return (
    <RigidBody type="fixed" colliders="cuboid" mass={5}>
      <mesh
        name="Back_low"
        castShadow
        receiveShadow
        geometry={nodes?.Back_low?.geometry}
        material={materials?.lambert1}
      />
    </RigidBody>
  );
}

ChildFrame.propTypes = {
  nodes: object,
  materials: object,
};

export default ChildFrame;
