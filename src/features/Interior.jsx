import { useGLTF } from "@react-three/drei";
import { BallCycle, Clock, TextGeometry, WallRack } from "../components/3D";
import { MYSELF_PROPERTY } from "../util/constants";
function Interior() {
  const { nodes, materials } = useGLTF("/models/wallRack.glb");

  return (
    <group position={[-14.5, 0, 3.34]}>
      {MYSELF_PROPERTY.map(({ text, y }, idx) => (
        <TextGeometry
          material={materials.Material_1}
          key={idx}
          text={text}
          scale={0.2}
          color="black"
          position={[0, y, 0.6]}
        />
      ))}

      <WallRack
        nodes={nodes}
        materials={materials}
        position={[5.9, 2.5, -0.01]}
        scale={[1.8, 1.7, 3.7]}
      />

      <Clock position={[10.9, 3.6, 3.2]} rotation={[0, Math.PI, 0]} scale={0.3} />
      <BallCycle/>
    </group>
  );
}

export default Interior;
