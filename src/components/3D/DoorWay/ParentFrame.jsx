import { RigidBody } from "@react-three/rapier";
import { object, string } from "prop-types";

function ParentFrame({ nodes, materials, materialId }) {
  return (
    <RigidBody type="fixed" colliders="cuboid" mass={5}>
      <mesh
        name="Parent_frame"
        castShadow
        receiveShadow
        geometry={nodes?.Parent_frame_1?.geometry}
        material={materials[materialId.A]}
          />
          <mesh
        name="Parent_frame"
        castShadow
        receiveShadow
        geometry={nodes?.Parent_frame_2?.geometry}
        material={materials[materialId.B]}
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
