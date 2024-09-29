import { RigidBody } from "@react-three/rapier";
import { object } from "prop-types";

function ParentFrame({ nodes, materials }) {
  return (
    <RigidBody type="fixed" colliders="cuboid" mass={5}>
      <mesh
        name="Bricks_low"
        castShadow
        receiveShadow
        geometry={nodes?.Bricks_low?.geometry}
        material={materials?.lambert1}
      />
    </RigidBody>
  );
}

ParentFrame.propTypes = {
  nodes: object,
  materials: object,
};

export default ParentFrame;
