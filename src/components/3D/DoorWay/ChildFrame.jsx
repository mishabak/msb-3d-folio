import { RigidBody } from "@react-three/rapier";
import { object } from "prop-types";

function ChildFrame({ nodes, materials }) {
  return (
    <RigidBody type="fixed" colliders="cuboid" mass={5}>
      <mesh
        name="Child_frame"
        castShadow
        receiveShadow
        geometry={nodes?.Child_frame?.geometry}
        material={materials?.Door_way}
      />
    </RigidBody>
  );
}

ChildFrame.propTypes = {
  nodes: object,
  materials: object,
};

export default ChildFrame;
