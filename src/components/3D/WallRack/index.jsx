import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Index({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  nodes,
  materials,
}) {
  return (
    <group position={position} scale={scale} rotation={rotation}>
      <mesh
        geometry={nodes.Base.geometry}
        material={materials.Material_3}
        scale={[2.20042, 0.671611, 0.00816]}
        position={[-1.52163, 0, 0]}
      />

      <mesh
        geometry={nodes.Rack.geometry}
        material={materials.Material_2}
        scale={1.09}
      />
    </group>
  );
}

useGLTF.preload("/wallRack.glb");
