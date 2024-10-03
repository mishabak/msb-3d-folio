import { useSpring, animated } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { RigidBody } from "@react-three/rapier";
import { bool, number, object } from "prop-types";
import Puzzle from "../Puzzle";

function Door({ nodes, materials, materialId, doorNo }) {
  const [DoorState, SetDoorState] = useState("DEFAULT");
  const [isDoorUnLock, setDoorUnLock] = useState(false);
  const doorRigdRef = useRef();

  const [test, setTest] = useState({
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  });

  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 4, tension: 150, friction: 100 },
    onChange: ({ value }) => {
      let zTransition = value?.rotation[2];
      function calculateB(Match) {
        const zIndexMax = -1.9;
        const zIndexMin = 0;
        if (zTransition === 0) {
          return 0;
        }
        const B =
          ((zTransition - zIndexMax) / (zIndexMin - zIndexMax)) * (0 - Match) +
          Match;
        return B;
      }
      setTest({
        rotation: [calculateB(0.04), 0, calculateB(-1.86)],
        position: [calculateB(-1.4), calculateB(-1.2), 0],
      });
    },
  }));

  useEffect(() => {
    switch (DoorState) {
      case "OPEN":
        api.start({
          rotation: [0, 0, -1.9],
          config: { tension: 100, friction: 23 },
        });
        break;

      case "CLOSE":
        api.start({ rotation: [0, 0, 0], config: { friction: 60 } });
        break;
    }
  }, [DoorState]);

  useEffect(() => {
    if (isDoorUnLock) {
      SetDoorState((prev) => (prev == "OPEN" ? "CLOSE" : "OPEN"));
    }
  }, [isDoorUnLock]);

  const handleClick = () => {
    if (isDoorUnLock)
      SetDoorState((prev) => (prev == "OPEN" ? "CLOSE" : "OPEN"));
  };

  return (
    <group onClick={handleClick}>
      <Puzzle
        setDoorUnLock={setDoorUnLock}
        texture={`Puzzle_image_${doorNo + 1}`}
      />
      <RigidBody
        position={test.position}
        rotation={test.rotation}
        colliders={"cuboid"}
        ref={doorRigdRef}
        type="fixed"
        mass={5}
      >
        <group position={[-1.107, -0.065, -2.332]}>
          <mesh geometry={nodes.Door_1.geometry}>
            <meshBasicMaterial visible={false} />
          </mesh>
          <mesh geometry={nodes.Door_2.geometry}>
            <meshBasicMaterial visible={false} />
          </mesh>
        </group>
      </RigidBody>

      <animated.group
        position={[-1.107, -0.065, -2.332]}
        rotation={springs.rotation}
      >
        <mesh
          geometry={nodes.Door_1.geometry}
          material={materials[materialId.A]}
        />
        <mesh
          geometry={nodes.Door_2.geometry}
          material={materials[materialId.B]}
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
