function PuzzleFrame({ nodes, materials }) {
  return (
    <mesh
      geometry={nodes.PuzzileFrame.geometry}
      material={materials.PuzzileFrame}
      position={[0.159, 0.31, -0.019]}
      scale={[0.25, 0.25, 0.019]}
    >
      <meshStandardMaterial
        metalness={1.4}
        roughness={0.1}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

export default PuzzleFrame;
