import { selector_rooms } from "./js/selector";
import { useGLTF } from "@react-three/drei";
import { Character, Door } from "../../components/3D";
import { useSelector } from "react-redux";
import { RigidBody } from "@react-three/rapier";
function Room(props) {
  const { nodes, materials, animations } = useGLTF("./models/3d-room.glb");
  const doorProperty = useSelector(selector_rooms.doorProperty);
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <RigidBody type="fixed" colliders="trimesh">
          <mesh
            name="Rooms"
            castShadow
            receiveShadow
            geometry={nodes.Rooms.geometry}
            material={nodes.Rooms.material}
            position={[0, 0.2, 0]}
            scale={[2.103, 0.108, 1.618]}
          />
        </RigidBody>
        {doorProperty.map((property) => (
          <Door
            {...property}
            nodes={nodes}
            key={property.name}
            materials={materials}
            animations={animations}
          />
        ))}
      </group>
    </group>
  );
}

useGLTF.preload("/3d-room.glb");
export default Room;
