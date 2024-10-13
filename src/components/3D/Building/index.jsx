import { useDispatch } from "react-redux";
import BackgroundMusic from "./BackgroundMusic";
import { RigidBody } from "@react-three/rapier";
import useAudio from "../../../hooks/useAudio";
import Lights from "./Lights";
import { ROOM_PROPERTY } from "../../../util/constants";
import { action_rooms } from "../../../features/room/js/slice";

const FloorMesh = ({ name, geometry, material }) => {
  const { audio, initialize } = useAudio({
    url: `/audio/roomMusic/${name}.mp3`,
  });
  const dispatch = useDispatch();
  const onCollision = (floorName) => {
    dispatch(action_rooms.setFloorColider(floorName));
  };

  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
      {...(name.startsWith("floor") && {
        onCollisionEnter: () => onCollision(name),
      })}
    >
      <mesh
        castShadow
        receiveShadow
        name={name}
        geometry={geometry}
        material={material}
      />
      <BackgroundMusic name={name} audio={audio} initialize={initialize} />
    </RigidBody>
  );
};

function Index({ nodes, materials }) {
  return (
    <group position={[0, 0.2, 0]} scale={[2.103, 0.108, 1.618]}>
      {ROOM_PROPERTY.map(({ name, geometry, material }) =>
        name.startsWith("floor") ? (
          <FloorMesh
            key={name}
            name={name}
            geometry={nodes[geometry].geometry}
            material={materials[material]}
          />
        ) : (
          <RigidBody key={name} type="fixed" colliders="trimesh">
            <mesh
              name={name}
              geometry={nodes[geometry].geometry}
              material={materials[material]}
            />
          </RigidBody>
        )
      )}
      <Lights />
    </group>
  );
}

export default Index;
