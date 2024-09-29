import { RigidBody } from "@react-three/rapier";
import { object, string } from "prop-types";

function ChildFrame({ nodes, materials, materialId }) {
  return (
    <RigidBody type="fixed" colliders="cuboid" mass={5}>
        <mesh
          name="Child_frame"
          castShadow
          receiveShadow
          geometry={nodes?.Child_frame_1?.geometry}
          material={materials[materialId.A]}
        />
        <mesh
          name="Child_frame"
          castShadow
          receiveShadow
          geometry={nodes?.Child_frame_2?.geometry}
          material={materials[materialId.B]}
        />
    </RigidBody>
  );
}

ChildFrame.propTypes = {
  nodes: object,
  materials: object,
  materialId: object,
};

export default ChildFrame;
