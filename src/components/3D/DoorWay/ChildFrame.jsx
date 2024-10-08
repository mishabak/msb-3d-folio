import { RigidBody } from "@react-three/rapier";
import { object } from "prop-types";

function ChildFrame({ nodes, materials }) {
  return (
    <RigidBody type="fixed" colliders="cuboid" mass={5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Child_frame_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Child_frame_2.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Child_frame_3.geometry}
        material={materials["Material.006"]}
      />
    </RigidBody>
  );
}

ChildFrame.propTypes = {
  nodes: object,
  materials: object,
};

export default ChildFrame;
