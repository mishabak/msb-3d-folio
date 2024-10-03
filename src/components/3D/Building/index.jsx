function Index({ nodes, materials }) {
  
  return (
    <group position={[0, 0.2, 0]} scale={[2.103, 0.108, 1.618]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_1.geometry}
        material={materials.Building}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_2.geometry}
        material={materials.Wall_4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_3.geometry}
        material={materials.Wall_5}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_4.geometry}
        material={materials.Wall_1}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_5.geometry}
        material={materials.Wall_2}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_6.geometry}
        material={materials.Wall_3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_7.geometry}
        material={materials.Floor_3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_8.geometry}
        material={materials.Floor_2}
      />
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_9.geometry}
        material={materials.Floor_1}
      />
    </group>
  );
}

export default Index;
