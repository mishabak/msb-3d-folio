import { useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { array, object, string } from "prop-types";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
function Door({
  name = "",
  nodes,
  position,
  rotation,
  materials,
  scale = [0.507, 0.59, 0.507],
  animations,
}) {
  const group = useRef();
  const { actions } = useAnimations(animations, group);
  const [openDoor, setOpenDoor] = useState(false);

  useEffect(() => {
    if (openDoor) {
      actions.Metal_lowAction.setLoop(THREE.LoopOnce);
      actions.Metal_lowAction.clampWhenFinished = true;
      actions.Metal_lowAction.clampWhenFinished = true;
      actions.Metal_lowAction.play();
    }
  }, [openDoor]);

  return (
    <group
      onClick={() => {
        setOpenDoor(true);
      }}
      ref={group}
      name={name}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        name="Back_low"
        castShadow
        receiveShadow
        geometry={nodes.Back_low.geometry}
        material={materials.lambert1}
      />
      <mesh
        name="Bricks_low"
        castShadow
        receiveShadow
        geometry={nodes.Bricks_low.geometry}
        material={materials.lambert1}
      />
      <mesh
        name="Metal_low"
        castShadow
        receiveShadow
        geometry={nodes.Metal_low.geometry}
        material={materials.lambert1}
        position={[-1.107, -0.065, -2.332]}
      />
    </group>
  );
}

Door.propTypes = {
  name: string,
  scale: array,
  nodes: object,
  rotation: array,
  position: array,
  materials: object,
  animations: array,
};
export default Door;
