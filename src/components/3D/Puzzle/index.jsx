import PuzzlePiece from "./PuzzlePiece";
import PuzzleFrame from "./PuzzleFrame";
import usePuzzle from "./usePuzzle";
import { Html, Text, } from "@react-three/drei";

export default function Puzzle({ texture, setDoorUnLock }) {
  const {
    EmptyPiece,
    EmptyRef,
    groupRef,
    handleClick,
    materials,
    nodes,
    shuffledPuzzle,
    progress
  } = usePuzzle({ setDoorUnLock });
  const chldProps = { texture, materials, nodes };
  
  return (
    <group
      scale={1.5}
      onClick={(e) => e.stopPropagation()}
      position={[-3, 0.3, -3]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <PuzzleFrame {...chldProps} />
      <group ref={groupRef}>
        {shuffledPuzzle.length > 0 &&
          shuffledPuzzle.map((data, idx) => (
            <PuzzlePiece
              key={idx}
              {...data}
              {...chldProps}
              handleClick={handleClick}
            />
          ))}
      </group>
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
