import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useEffect, useRef } from "react";
import useAudio from "../../../hooks/useAudio";

function useCharacter() {
  const { audio, initialize } = useAudio({
    url: "/audio/character/girlFootStep.mp3",
  });

  useEffect(() => {
    initialize();
  }, []);

  const cameraPosition = useRef(new Vector3());
  const cameraLookAt = useRef(new Vector3());
  const [, get] = useKeyboardControls();
  const rotationSpeed = 0.05;
  const charRef = useRef();
  const rb = useRef();
  const speed = 2;

  function characterControll() {
    const vel = rb.current.linvel();
    window.characterQuaternion = charRef?.current.quaternion;
    const movement = { forward: 0, turn: 0 };

    if (!window.disableMovement) {
      if (get().forward) movement.forward = 1;
      if (get().backward) movement.forward = -1;
      if (get().left) movement.turn = 1;
      if (get().right) movement.turn = -1;
    }

    if (movement.turn !== 0) {
      charRef.current.rotation.y += movement.turn * rotationSpeed;
      window.extraVision = false;
    }

    if (movement.forward !== 0) {
      window.extraVision = false;
      const forwardDirection = new Vector3(0, 0, 1).applyQuaternion(
        charRef.current.quaternion
      );
      vel.x = forwardDirection.x * movement.forward * speed;
      vel.z = forwardDirection.z * movement.forward * speed;
    } else {
      vel.x = 0;
      vel.z = 0;
    }
      
    if (movement.forward !== 0 || movement.turn !== 0) {
        if (!audio.isPlaying) {
          audio.setVolume(0.3);
          audio.play();
          audio.setLoop(true);
        }
      } else {
        if (audio.isPlaying) {
          audio.stop();
        }
      }

    rb.current.setLinvel(vel, true);
  }

  function handleCamera({ camera }) {
    const charPosition = rb.current.translation();
    const direction = new Vector3();
    charRef.current.getWorldDirection(direction);
    direction.negate();
    cameraPosition.current.copy(charPosition).addScaledVector(direction, 2);

    switch (window.extraVision) {
      case "INPUT":
        cameraPosition.current.x += 0.1;
        cameraPosition.current.y += 2.7;
        cameraPosition.current.z += 0.3;
        break;
      case "TEXT_AREA":
        cameraPosition.current.x += -0.6;
        cameraPosition.current.y += 2.7;
        cameraPosition.current.z += 0.3;
        break;
      default:
        cameraPosition.current.y += 2;
        break;
    }

    camera.position.lerp(cameraPosition.current, 0.1);
    cameraLookAt.current.set(
      charPosition.x,
      charPosition.y + 1.5,
      charPosition.z
    );
    camera.lookAt(cameraLookAt.current, 0.01);
  }

  useFrame(({ camera }) => {
    if (rb?.current) {
      characterControll();
      handleCamera({ camera });
    }
  });

  return { rb, charRef };
}

export default useCharacter;
