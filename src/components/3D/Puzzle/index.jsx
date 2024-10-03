import { selector_rooms } from "../../../features/room/js/selector";
import { shuffleArray } from "../../../util/shuffleArray";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleFrame from "./PuzzleFrame";

useGLTF.preload("/puzzle.glb");

export default function Puzzle({ texture, setDoorUnLock }) {
  const { nodes, materials } = useGLTF("./models/puzzle.glb");
  const puzzleProperty = useSelector(selector_rooms.puzzleProperty);
  const EmptyRef = useRef();
  const [shuffledPuzzle, setShuffledPuzzle] = useState([]);
  const EmptyPiece = [0.32, 0.148, 0];

  const checkCompletion = (currentPuzzle) => {
    for (let i = 0; i < puzzleProperty.length; i++) {
      const originalPos = puzzleProperty[i].position;
      const currentPos = currentPuzzle[i].position;
      // If any position doesn't match, puzzle is not complete
      if (
        originalPos[0] !== currentPos[0] ||
        originalPos[1] !== currentPos[1]
      ) {
        return false;
      }
    }
    return true;
  };
  const handleClick = (e, play) => {
    const { position } = e.eventObject;
    const emptyPos = EmptyRef.current.position;
    const isSameX = position.x === emptyPos.x;
    const isSameY = position.y === emptyPos.y;
    const isCloseY = Math.abs(position.y - emptyPos.y) <= 0.163;
    const isCloseX = Math.abs(position.x - emptyPos.x) <= 0.16;
    if ((isSameX && isCloseY) || (isSameY && isCloseX)) {
      let Swap = { ...position };
      play(emptyPos, () => {
        [emptyPos.x, emptyPos.y] = [Swap.x, Swap.y];
      });

      const updatedPuzzle = shuffledPuzzle.map((piece) => {
        if (
          piece.position[0] === position.x &&
          piece.position[1] === position.y
        ) {
          return { ...piece, position: [emptyPos.x, emptyPos.y] };
        }
        return piece;
      });
      setShuffledPuzzle(updatedPuzzle);

      if (checkCompletion(updatedPuzzle)) {
        setDoorUnLock(true);
      }
    }
  };

  useEffect(() => {
    const randomizedPuzzle = shuffleArray([...puzzleProperty]);
    setShuffledPuzzle(randomizedPuzzle);
  }, [puzzleProperty]);

  return (
    <group onClick={(e) => e.stopPropagation()} position={[-3, 0.3, -3]} rotation={[-Math.PI / 2, 0, 0]}>
      <PuzzleFrame nodes={nodes} materials={materials} />
      {shuffledPuzzle.length > 0 &&
        shuffledPuzzle.map((data, idx) => (
          <PuzzlePiece
            key={idx}
            name={data.name}
            position={data.position}
            geometry={nodes[`piece_${idx + 1}`].geometry}
            material={materials[texture]}
            handleClick={handleClick}
          />
        ))}
      <mesh
        ref={EmptyRef}
        name="empty_position"
        position={EmptyPiece}
        scale={[0.076, 0.076, 0.008]}
        geometry={nodes.Empty_piece.geometry}
        material={materials.Material}
      >
        <meshBasicMaterial visible={false} />
      </mesh>
    </group>
  );
}
