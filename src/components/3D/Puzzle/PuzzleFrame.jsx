function PuzzleFrame({nodes,materials}) {
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.PuzzileFrame.geometry}
      material={materials.PuzzileFrame}
      position={[0.159, 0.31, -0.019]}
      scale={[0.25, 0.25, 0.019]}
    />
  );
}

export default PuzzleFrame;
