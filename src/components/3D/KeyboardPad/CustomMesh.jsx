export default function CustomMesh({
  name,
  material,
  position = [0, 0, 0],
  scale = 1,
  nodes,
  materials,
}) {
  return (
    <mesh
      name={name}
      geometry={nodes[name].geometry}
      material={materials[material]}
      position={position}
      scale={scale}
    />
  );
}
