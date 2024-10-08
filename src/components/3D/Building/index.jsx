import Lights from "./Lights";

function Index({ nodes, materials }) {
  return (
    <group position={[0, 0.2, 0]} scale={[2.103, 0.108, 1.618]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_1.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_2.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_3.geometry}
        material={materials["Material.007"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_4.geometry}
        material={materials["Material.008"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_5.geometry}
        material={materials["Material.009"]}
      />
      <Lights />
     
    </group>
  );
}

export default Index;
