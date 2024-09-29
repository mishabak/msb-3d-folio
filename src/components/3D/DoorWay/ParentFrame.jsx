import { RigidBody } from "@react-three/rapier";
import { object } from "prop-types";

function ParentFrame({ nodes, materials }) {
  return (
    <RigidBody type="fixed" colliders="cuboid" mass={5}>
      <mesh
        name="Parent_frame"
        castShadow
        receiveShadow
        geometry={nodes?.Parent_frame?.geometry}
        material={materials?.Door_way}
      />
    </RigidBody>
  );
}

ParentFrame.propTypes = {
  nodes: object,
  materials: object,
};

export default ParentFrame;
