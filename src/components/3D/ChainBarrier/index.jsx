import { useGLTF } from "@react-three/drei";

export default function Index(props) {
  const { nodes, materials } = useGLTF("/models/chainBarrier.glb");
  return (
    <group
      rotation={[0, Math.PI, 0]}
      position={[0.5, 0, 0]}
      scale={[0.4, 0.6, 0.4]}
      {...props}
    >
      <mesh
        geometry={nodes.ChainLeft.geometry}
        material={materials.MaterialChain}
        position={[0.728, 0.57, -0.988]}
        rotation={[-Math.PI, 0, -1.781]}
        scale={0.005}
      />
      <mesh
        geometry={nodes.ChainRight.geometry}
        material={materials.MaterialChain}
        position={[0.728, 0.57, 1.018]}
        rotation={[-Math.PI, 0, -1.781]}
        scale={0.005}
      />
      <mesh
        geometry={nodes.ChainBack.geometry}
        material={materials.MaterialChain}
        position={[1.941, 0.65, 0.585]}
        rotation={[1.635, 0.205, -2.084]}
        scale={0.005}
      />
    </group>
  );
}

useGLTF.preload("/models/chainBarrier.glb");
