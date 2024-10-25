import { useRef } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function GirlCharacter() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/girlCharacter.glb");
  const [, get] = useKeyboardControls();
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (get().forward || get().backward || get().left || get().right) {
      if (get().backward) {
        if (actions["Walking"].timeScale == 1) {
          actions["Walking"].timeScale = -1;
        }
      } else {
        if (actions["Walking"].timeScale == -1) {
          actions["Walking"].timeScale = 1;
        }
      }

      if (!actions["Walking"].isRunning()) {
        actions["Walking"].play();
      }

      if (actions["Idle"].isRunning()) {
        actions["Idle"].stop();
      }
    } else {
      if (!actions["Idle"].isRunning()) {
        actions["Idle"].play();
      }
      if (actions["Walking"].isRunning()) {
        actions["Walking"].stop();
      }
    }
  });  

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
