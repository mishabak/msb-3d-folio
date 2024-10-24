import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GirlCharacter } from "./Girl";

function Index({ audio }) {
  const rb = useRef();
  const [, get] = useKeyboardControls();
  const speed = 2;

  const charRef = useRef();
  const rotationSpeed = 0.05;
  const cameraPosition = useRef(new THREE.Vector3());
  const cameraLookAt = useRef(new THREE.Vector3());
  const [isMove, setMove] = useState(false);

  useFrame(({ camera, mouse }) => {
    if (rb?.current) {
      const vel = rb.current.linvel();
      const movement = { forward: 0, turn: 0 };

      if (get().forward) movement.forward = 1;
      if (get().backward) movement.forward = -1;
      if (get().left) movement.turn = 1;
      if (get().right) movement.turn = -1;

      if (movement.turn !== 0) {
        charRef.current.rotation.y += movement.turn * rotationSpeed;
      }

      if (movement.forward !== 0) {
        const forwardDirection = new THREE.Vector3(0, 0, 1).applyQuaternion(
          charRef.current.quaternion
        );

        vel.x = forwardDirection.x * movement.forward * speed;
        vel.z = forwardDirection.z * movement.forward * speed;
      } else {
        vel.x = 0;
        vel.z = 0;
      }

      if (movement.forward !== 0 || movement.turn !== 0) {
        setMove(true);
      } else {
        setMove(false);
      }

      rb.current.setLinvel(vel, true);

      const charPosition = rb.current.translation();
      const direction = new THREE.Vector3();
      charRef.current.getWorldDirection(direction);
      direction.negate();

      cameraPosition.current.copy(charPosition).addScaledVector(direction, 2);
      cameraPosition.current.y += 2;

      camera.position.lerp(cameraPosition.current, 0.1);
      cameraLookAt.current.set(
        charPosition.x,
        charPosition.y + 1.5,
        charPosition.z
      );
      camera.lookAt(cameraLookAt.current, 0.01);
    }
  });

  useEffect(() => {
    if (isMove) {
      audio.setVolume(0.2);
      audio.play();
      audio.setLoop(true);
    }
    return () => {
      audio.stop();
    };
  }, [isMove]);

  return (
    <RigidBody
      lockRotations
      ref={rb}
      colliders={false}
      scale={0.35}
      position={[-13, 0.1, 10]}
      // position={[-12, 0.1, -5]}
    >
      <group
        ref={charRef}
        position={[0, 1.7, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <GirlCharacter isMove={isMove} />
      </group>
      <CapsuleCollider position={[0, 4, 0]} args={[1.4, 1.7]} />
    </RigidBody>
  );
}

export default Index;
