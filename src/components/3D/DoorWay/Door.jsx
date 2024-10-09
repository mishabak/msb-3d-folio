import { bool, number, object } from "prop-types";
import { RigidBody } from "@react-three/rapier";
import { animated } from "@react-spring/three";
import DoorTitle from "./DoorTitle";
import useDoor from "./useDoor";
import Puzzle from "../Puzzle";

function Door({ nodes, materials, materialId, doorNo }) {
  const {
    doorRigdRef,
    handleClick,
    setDoorUnLock,
    isDoorUnLock,
    springs,
    test,
    closeDoor,
    openDoor,
    cback1,
  } = useDoor();
  return (
    <group onClick={handleClick}>
      <Puzzle
        cback1={cback1}
        setDoorUnLock={setDoorUnLock}
        texture={`Puzzle_image_${doorNo}`}
      />
      <DoorTitle isOpen={isDoorUnLock} />
      <RigidBody
        position={test.position}
        rotation={test.rotation}
        colliders={"cuboid"}
        ref={doorRigdRef}
        type="fixed"
        mass={5}
      >
        <group position={[-1.107, -0.065, -2.332]}>
          <mesh geometry={nodes.Door_1.geometry} material={materials.Material}>
            <meshBasicMaterial visible={false} />
          </mesh>
          <mesh geometry={nodes.Door_2.geometry}>
            <meshBasicMaterial visible={false} />
          </mesh>
          <mesh geometry={nodes.Door_3.geometry}>
            <meshBasicMaterial visible={false} />
          </mesh>
          <mesh geometry={nodes.Door_4.geometry}>
            <meshBasicMaterial visible={false} />
          </mesh>
        </group>
      </RigidBody>

      <animated.group
        position={[-1.107, -0.065, -2.332]}
        rotation={springs.rotation}
      >
        <mesh geometry={nodes.Door_1.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Door_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Door_3.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Door_4.geometry}
          material={materials["Material.006"]}
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
