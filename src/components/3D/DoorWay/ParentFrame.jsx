import { RigidBody } from "@react-three/rapier";
import { object, string } from "prop-types";

function ParentFrame({ nodes, materials, materialId }) {
  return (
    <RigidBody type="fixed" colliders={false} mass={5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Parent_frame_1.geometry}
        material={materials[materialId.a]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Parent_frame_2.geometry}
        material={materials[[materialId.b]]}
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
