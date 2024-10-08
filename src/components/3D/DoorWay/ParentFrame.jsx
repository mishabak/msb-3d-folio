import { RigidBody } from "@react-three/rapier";
import { object, string } from "prop-types";

function ParentFrame({ nodes, materials }) {
  return (
    <RigidBody type="fixed" colliders="cuboid" mass={5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Parent_frame_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Parent_frame_2.geometry}
        material={materials["Material.006"]}
      />
    </RigidBody>
  );
}

ParentFrame.propTypes = {
  nodes: object,
  materials: object,
  materialId: object,
};

export default ParentFrame;
