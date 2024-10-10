import { RigidBody } from "@react-three/rapier";
import { object } from "prop-types";

function ChildFrame({ nodes, materials,materialId}) {
  return (
    <RigidBody type="fixed" colliders={false} mass={5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Child_frame_1.geometry}
        material={materials[materialId.c]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Child_frame_2.geometry}
        material={materials[materialId.d]}
      />
    </RigidBody>
  );
}

ChildFrame.propTypes = {
  nodes: object,
  materials: object,
};

export default ChildFrame;
