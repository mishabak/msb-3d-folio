import { selector_rooms } from "../../../features/Room/js/selector";
import { action_rooms } from "../../../features/Room/js/slice";
import { useDispatch, useSelector } from "react-redux";
import BackgroundMusic from "./BackgroundMusic";
import { RigidBody } from "@react-three/rapier";
import useAudio from "../../../hooks/useAudio";
import Lights from "./Lights";
import { ROOM_PROPERTY } from "../../../util/constants";

const RoomMesh = ({ name, geometry, material, onCollision }) => {
  const { audio } = useAudio({ url: `/audio/roomMusic/${name}.mp3` });
  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
      {...(onCollision && { onCollisionEnter: () => onCollision(name) })}
    >
      <mesh
        castShadow
        receiveShadow
        name={name}
        geometry={geometry}
        material={material}
      />
      <BackgroundMusic name={name} audio={audio} />
    </RigidBody>
  );
};

function Index({ nodes, materials }) {
  const dispatch = useDispatch();

  const handleCollision = (floorName) => {
    dispatch(action_rooms.setFloorColider(floorName));
  };

  return (
    <group position={[0, 0.2, 0]} scale={[2.103, 0.108, 1.618]}>
      {ROOM_PROPERTY.map(({ name, geometry, material }) => (
        <RoomMesh
          key={name}
          name={name}
          geometry={nodes[geometry].geometry}
          material={materials[material]}
          onCollision={name.startsWith("floor") ? handleCollision : null}
        />
      ))}
      <Lights />
    </group>
  );
}

export default Index;
