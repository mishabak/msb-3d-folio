function PuzzleFrame({ nodes, materials, puzzleId }) {
  return (
    <group position={[0.159, 0.31, -0.019]} scale={[0.25, 0.25, 0.019]}>
      <mesh geometry={nodes.Cube001.geometry}>
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh geometry={nodes.Cube001_1.geometry}>
        <meshBasicMaterial color={"white"} />
      </mesh>
      <mesh
        geometry={nodes.Cube001_2.geometry}
        material={materials[`Puzzle_image_${puzzleId}`]}
      />
    </group>
  );
}

export default PuzzleFrame;
