import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function GirlCharacter({ isMove }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/girlCharacter.glb");
  const { actions } = useAnimations(animations, group);
    useEffect(() => {
      
    if (isMove) {
        actions["Idle"].stop()
      actions["Walking"].play();
    } else {
        actions["Walking"].stop();
      actions["Idle"].play()
    }
  }, [isMove]);

  return (
    <group ref={group} scale={3} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Object007"
            geometry={nodes.Object007.geometry}
            material={materials.Material__2}
            skeleton={nodes.Object007.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/girlCharacter.glb");
