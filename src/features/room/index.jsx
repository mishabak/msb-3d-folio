import { RigidBody } from "@react-three/rapier";
import { DoorWay } from "../../components/3D";
import { useGLTF } from "@react-three/drei";
function Room() {
  const { nodes, materials } = useGLTF("./models/3d-room-test.glb");
  console.log(nodes,"nodes");
  
  return (
      <group onClick={(e) => e.stopPropagation()} name="">
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            name="Rooms"
            castShadow
            receiveShadow
            geometry={nodes?.Building?.geometry}
            material={nodes?.Building?.material}
            position={[0, 0.2, 0]}
            scale={[2.103, 0.108, 1.618]}
          />
        </RigidBody>
        <DoorWay nodes={nodes} materials={materials} />
      </group>
  );
}
useGLTF.preload("/3d-room.glb");
export default Room;
