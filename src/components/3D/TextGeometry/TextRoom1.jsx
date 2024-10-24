import { Clock, WallRack } from "..";
import Text from ".";
import { MYSELF_PROPERTY } from "../../../util/constants";
import { useGLTF } from "@react-three/drei";
function TextRoom1() {
  const { nodes, materials } = useGLTF("/models/wallRack.glb");
  const chldProps = { nodes, materials };

  return (
    <group position={[-14.5, 0, 3.34]} rotation={[0, 0, 0]}>
      <WallRack
        {...chldProps}
        position={[5.9, 2.5, -0.01]}
        scale={[1.8, 1.7, 3.7]}
      />
      {MYSELF_PROPERTY.map(({ text, y }, idx) => (
        <Text
          {...chldProps}
          key={idx}
          text={text}
          scale={0.2}
          color="black"
          position={[0, y, 0.6]}
        />
      ))}
          <Clock/>
    </group>
  );
}

export default TextRoom1;
