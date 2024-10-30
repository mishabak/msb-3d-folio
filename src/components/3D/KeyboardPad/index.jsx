import { useAnimations, useGLTF } from "@react-three/drei";
import { TOUCH_PAD_PROPERTY } from "../../../util/constants";
import TouchPadPhysics from "./TouchPadPhysics";
import CustomMesh from "./CustomMesh";
import { useRef } from "react";
import Floor from "./Floor";
import { ChainBarrier } from "..";

export default function Index(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/hologramTouchPad.glb"
  );
  const { actions } = useAnimations(animations, group);
  const glbProp = { nodes, materials, actions };

  return (
    <group
      ref={group}
      {...props}
      scale={1}
      position={[0, -0.52, 1.5]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <group name="Scene">
        {TOUCH_PAD_PROPERTY.pad.map((data) => (
          <CustomMesh key={data.name} {...glbProp} {...data} />
        ))}
      </group>
      <Floor {...glbProp} />
      <TouchPadPhysics />
      <ChainBarrier/>
    </group>
  );
}

useGLTF.preload("/models/hologramTouchPad.glb");
