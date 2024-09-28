import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import * as THREE from "three";
function Character() {
  const characterRef = useRef();
  let speed = 5;
  const control = {
    forward: false,
    backward: false,
    left: false,
    right: false,
  };

  const handleClick = ({ keyCode }) => {
    switch (keyCode) {
      case 87:
        control.forward = true;
        break;
      case 83:
        control.backward = true;
        break;
      case 65:
        control.left = true;
        break;
      case 68:
        control.right = true;
        break;
    }
  };

  const handleLeave = () => {
    control.forward = false;
    control.backward = false;
    control.left = false;
    control.right = false;
  };

  useEffect(() => {
    addEventListener("keydown", handleClick);
    addEventListener("keyup", handleLeave);

    return () => {
      window.removeEventListener("keydown", handleClick);
      window.removeEventListener("keyup", handleLeave);
    };
  }, []);

  useFrame(() => {
    let velocity = new THREE.Vector3();
    characterRef.current.lockRotations();

    if (!characterRef.current) return;

    if (control.forward) velocity.x -= speed;
    if (control.backward) velocity.x += speed;
    if (control.left) velocity.z -= speed;
    if (control.right) velocity.z += speed;
    characterRef.current?.setLinvel(velocity, true);
  }, []);

  return (
    <RigidBody ref={characterRef} type="dynamic" colliders={'cuboid'} ccd={true} mass={1}  canSleep={false}>
      <Box args={[0.7, 0.7, 0.7]} position={[-2.5, 1, 6]}>
        <meshBasicMaterial color={"red"} />
      </Box>
    </RigidBody>
  );
}

export default Character;
