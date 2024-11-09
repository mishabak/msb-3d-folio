import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Messenger from "./Messenger";

export function GirlCharacter() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/girlCharacter.glb");
  const [, get] = useKeyboardControls();
  const { actions } = useAnimations(animations, group);
  let typingOnce = true,
    leavingOnce = true;
  useFrame(() => {
    if (!window.disableMovement && !window.isIntroPage) {
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
      typingOnce = true;
      leavingOnce = true;
      actions["IdleTyping"].time > 0 && actions["IdleTyping"].stop();
      actions["Typing"].time > 0 && actions["Typing"].stop();
    } else if (
      window.extraVision === "INPUT" ||
      window.extraVision === "TEXT_AREA"
    ) {
      if (window.isTyping) {
        const existFrame = actions["Typing"].time;
        actions["Typing"].paused = false;
        actions["Typing"].time = existFrame;
        if (typingOnce) {
          actions["Typing"].play();
          typingOnce = false;
        }
        actions["IdleTyping"].paused = true;
      } else {
        if (leavingOnce) {
          !actions["IdleTyping"].isRunning() &&
            !actions["Typing"].isRunning() &&
            actions["IdleTyping"].play();
          leavingOnce = false;
        }
      }

      actions["Walking"].isRunning() && actions["Walking"].stop();
      actions["Idle"].isRunning() && actions["Idle"].stop();
    }
  });

  const KeyboardAnimator = () => {
    const [anim, setAnim] = useState(false);

    const handleKeydown = () => {
      setAnim(true);
    };
    const handleKeyup = () => {
      setAnim(false);
    };

    let timer;
    useEffect(() => {
      if (
        (window.extraVision === "INPUT" ||
          window.extraVision === "TEXT_AREA") &&
        !anim
      ) {
        timer = setTimeout(() => {
          actions["Typing"].paused = true;
          actions["IdleTyping"].paused = false;
        }, 2000);
      }
      addEventListener("keydown", handleKeydown);
      addEventListener("keyup", handleKeyup);
      return () => {
        removeEventListener("keydown", handleKeydown);
        removeEventListener("keyup", handleKeyup);
        clearTimeout(timer);
      };
    }, [anim]);
    return null;
  };

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
      <Messenger />
      <KeyboardAnimator />
    </group>
  );
}

useGLTF.preload("/models/girlCharacter.glb");
