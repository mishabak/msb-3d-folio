import Lights from "./Lights";

function Index({ nodes, materials }) {
  return (
    <group position={[0, 0.2, 0]} scale={[2.103, 0.108, 1.618]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_1.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_2.geometry}
        material={materials.Room2_wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_3.geometry}
        material={materials.Room3_wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_4.geometry}
        material={materials.Room4_wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_5.geometry}
        material={materials.Room1_wall}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_6.geometry}
        material={materials.Room1_floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_7.geometry}
        material={materials.Room2_floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_8.geometry}
        material={materials.Room3_floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_9.geometry}
        material={materials.Room4_floor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_10.geometry}
        material={materials.Room5_floor}
      />
      <Lights />
    </group>
  );
}

export default Index;
