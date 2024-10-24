import PuzzlePiece from "./PuzzlePiece";
import PuzzleFrame from "./PuzzleFrame";
import usePuzzle from "./usePuzzle";

export default function Puzzle({ puzzleId, setDoorUnLock, PuzzleAudio }) {
  const {
    EmptyPiece,
    EmptyRef,
    groupRef,
    handleClick,
    materials,
    nodes,
    shuffledPuzzle,
  } = usePuzzle({ setDoorUnLock, puzzleId, PuzzleAudio });
  const chldProps = { materials, nodes };

  return (
    <group
      scale={1.5}
      onClick={(e) => e.stopPropagation()}
      position={[-3, 0.3, -2.5]}
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
              texture={`Puzzle_image_${puzzleId}`}
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
