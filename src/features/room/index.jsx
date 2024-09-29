import { RigidBody } from "@react-three/rapier";
import { DoorWay } from "../../components/3D";
import { useGLTF } from "@react-three/drei";
function Room() {
  const { nodes, materials } = useGLTF("./models/3d-room.glb");

  return (
    <group>
      <group onClick={(e) => e.stopPropagation()} name="Scene">
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            name="Rooms"
            castShadow
            receiveShadow
            geometry={nodes?.Rooms?.geometry}
            material={nodes?.Rooms?.material}
            position={[0, 0.2, 0]}
            scale={[2.103, 0.108, 1.618]}
          />
        </RigidBody>
        <DoorWay nodes={nodes} materials={materials} />
      </group>
    </group>
  );
}
useGLTF.preload("/3d-room.glb");
export default Room;
