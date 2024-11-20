import { selector_rooms } from "../../../features/js/selector";
import { useSpring, animated } from "@react-spring/three";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function SolvedImg({ puzzleId, doorId, nodes, materials }) {
  const isSolved = useSelector(selector_rooms[`solvedPuzzle_${doorId}`]);
  const [spring, api] = useSpring(() => ({
    config: { duration: 0 },
    position: [0, 0, 0],
    scale: [1, 1, 1],
  }));

  useEffect(() => {
    if (isSolved) {
      api.start({
        config: { duration: 0 },
        position: [2.2, -1.05, 10.1],
        scale: [1.5, 1.5, 1.5],
      });
      api.start({
        delay: 300,
        config: { duration: 400 },
        position: [4.448, -2.197, 5.1],
        scale: [3.13, 3.13, 10],
      });
    } else {
      api.start({
        config: { duration: 0 },
        position: [0, 0, 0],
        scale: [1, 1, 1],
      });
    }
  }, [isSolved]);

  return (
    <animated.group scale={spring.scale} position={spring.position}>
      <mesh geometry={nodes.Cube001_1.geometry} material={materials.Material}>
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        geometry={nodes.Cube001_2.geometry}
        material={materials[`Puzzle_image_${puzzleId}`]}
      />
    </animated.group>
  );
}

function PuzzleFrame({ nodes, materials, puzzleId, doorId }) {
  const chldProps = { nodes, materials, doorId, puzzleId };
  return (
    <group position={[0.159, 0.31, -0.019]} scale={[0.25, 0.25, 0.019]}>
      <mesh geometry={nodes.Cube001.geometry} material={materials.PuzzileFrame}>
        <meshBasicMaterial color={"white"} />
      </mesh>
      <SolvedImg {...chldProps} />
    </group>
  );
}

export default PuzzleFrame;
