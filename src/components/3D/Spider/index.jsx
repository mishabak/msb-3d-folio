import { Box, useGLTF } from "@react-three/drei";

export default function Spider(props) {
  const { nodes, materials } = useGLTF("models/spider.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-6, 0.5, -1]} scale={0.1}>
        <mesh
          geometry={nodes.Sphere_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Sphere_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Sphere_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/spider.glb");
