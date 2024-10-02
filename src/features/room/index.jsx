import { RigidBody } from "@react-three/rapier";
import { Building, DoorWay } from "../../components/3D";
import { useGLTF } from "@react-three/drei";
function Room() {
  const { nodes, materials } = useGLTF("./models/3d-room-test.glb");
  const props = { nodes, materials };
  return (
    <group onClick={(e) => e.stopPropagation()} dispose={null}>
      <RigidBody type="fixed" colliders="trimesh">
        <Building {...props} />
      </RigidBody>
      <DoorWay {...props} />
    </group>
  );
}
useGLTF.preload("/3d-room.glb");
export default Room;
