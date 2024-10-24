import { bool, number, object } from "prop-types";
import { RigidBody } from "@react-three/rapier";
import { animated } from "@react-spring/three";
import useDoor from "./useDoor";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const DoorPhysics = ({ DOOR_POSITION, nodes }) => {
  const [ab, abs] = useState({ position: [0, 0, 0], rotation: [0, 0, 0] });

  useFrame(() => {
    if (DOOR_POSITION?.current) {
      abs({
        position: DOOR_POSITION?.current.position,
        rotation: DOOR_POSITION?.current.rotation,
      });
    }
  });
  return (
    <RigidBody
      position={ab.position}
      rotation={ab.rotation}
      colliders={"hull"}
      type="fixed"
      mass={5}
      ccd
      canSleep={false}
    >
      <group position={[-1.107, -0.065, -2.332]}>
        <mesh geometry={nodes.Door_1.geometry}>
          <meshBasicMaterial visible={false} />
        </mesh>
        <mesh geometry={nodes.Door_2.geometry}>
          <meshBasicMaterial visible={false} />
        </mesh>
        <mesh geometry={nodes.Door_3.geometry}>
          <meshBasicMaterial visible={false} />
        </mesh>
      </group>
    </RigidBody>
  );
};

function Door({
  nodes,
  materials,
  materialId,
  doorNo,
  closeDoorAudio,
  openDoorAudio,
}) {
  const { handleClick, DOOR_POSITION, springs } = useDoor({
    closeDoorAudio,
    openDoorAudio,
    doorNo,
  });
  return (
    <group onClick={handleClick}>
      <DoorPhysics nodes={nodes} DOOR_POSITION={DOOR_POSITION} />
      <animated.group
        position={[-1.107, -0.065, -2.332]}
        rotation={springs.rotation}
      >
        <mesh
          geometry={nodes.Door_1.geometry}
          material={materials[materialId.a]}
        />
        <mesh
          geometry={nodes.Door_2.geometry}
          material={materials[materialId.b]}
        />
        <mesh
          geometry={nodes.Door_3.geometry}
          material={materials[materialId.d]}
        />
      </animated.group>
    </group>
  );
}

Door.propTypes = {
  nodes: object,
  materials: object,
  materialId: object,
  isDoorUnLock: bool,
  doorNo: number,
};

export default Door;
