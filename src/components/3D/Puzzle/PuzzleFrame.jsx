function PuzzleFrame({ nodes, materials }) {
  return (
    <group position={[0.159, 0.31, -0.019]} scale={[0.25, 0.25, 0.019]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.PuzzileFrame}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_2.geometry}
        material={materials.Puzzle_image_1}
      />
    </group>
  );
}

export default PuzzleFrame;
