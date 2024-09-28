import { useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { array, object, string } from "prop-types";
import { RigidBody } from "@react-three/rapier";

function Door({
  name = "",
  nodes,
  position,
  rotation,
  materials,
  scale = [0.507, 0.59, 0.507],
  animations,
}) {
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  const [DoorState, SetDoorState] = useState("default");
  const doorRigdRef = useRef();

  const [doorPosition, setDoorPosition] = useState({
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  });
  useEffect(() => {
    if (actions.Open_door && actions.Close_door) {
      switch (DoorState) {
        case "OPEN":
          actions.Close_door.stop();
          actions.Open_door.reset().setLoop(THREE.LoopOnce);
          actions.Open_door.clampWhenFinished = true;
          actions.Open_door.play();
          if (doorRigdRef.current) {
            setDoorPosition({
              rotation: [0.04, 0, -1.75],
              position: [-1.3, -1.2, 0],
            });
          }
          break;

        case "CLOSE":
          actions.Open_door.stop();
          actions.Close_door.reset().setLoop(THREE.LoopOnce);
          actions.Close_door.clampWhenFinished = true;
          actions.Close_door.play();
          setDoorPosition({ rotation: [0, 0, 0], position: [0, 0, 0] });
          break;
      }
    }
  }, [DoorState, actions]);

  const handleClick = () => {
    if (!actions.Open_door || !actions.Close_door) return;
    if (actions.Open_door.isRunning() || actions.Close_door.isRunning()) return;

    switch (DoorState) {
      case "CLOSE":
        SetDoorState("OPEN");
        break;
      case "OPEN":
        SetDoorState("CLOSE");
        break;
      default:
        SetDoorState("OPEN");
        break;
    }
  };

  return (
    <group
      onClick={handleClick}
      ref={group}
      name={name}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <RigidBody type="fixed" colliders="cuboid" mass={5}>
        <mesh
          name="Back_low"
          castShadow
          receiveShadow
          geometry={nodes.Back_low.geometry}
          material={materials.lambert1}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid" mass={5}>
        <mesh
          name="Bricks_low"
          castShadow
          receiveShadow
          geometry={nodes.Bricks_low.geometry}
          material={materials.lambert1}
        />
      </RigidBody>
      <RigidBody
        type="fixed"
        // ccd={true}
        // canSleep={false}
        ref={doorRigdRef}
        position={doorPosition.position}
        rotation={doorPosition.rotation}
      >
        <mesh
          geometry={nodes.Metal_low.geometry}
          position={[-1.107, -0.065, -2.332]}
        >
          <meshBasicMaterial visible={false} />
        </mesh>
      </RigidBody>
      <mesh
        name="Metal_low"
        castShadow
        receiveShadow
        geometry={nodes.Metal_low.geometry}
        material={materials.lambert1}
        position={[-1.107, -0.065, -2.332]}
      />
    </group>
  );
}

Door.propTypes = {
  name: string,
  scale: array,
  nodes: object,
  rotation: array,
  position: array,
  materials: object,
  animations: array,
};
export default Door;
