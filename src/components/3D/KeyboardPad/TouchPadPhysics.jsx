import { CuboidCollider, RigidBody } from "@react-three/rapier";

function TouchPadPhysics() {
  return (
    <RigidBody type="fixed" colliders={false}>
      <CuboidCollider
        position={[0, 1, 0]}
        rotation={[0, 0, 0]}
        args={[0.2, 0.3, 0.5]}
      />
      <CuboidCollider
        position={[0.4, 0.1, -0.375]}
        rotation={[0, 0, 0]}
        args={[0.5, 0.3, 0.02]}
      />
      <CuboidCollider
        position={[0.4, 0.1, 0.375]}
        rotation={[0, 0, 0]}
        args={[0.5, 0.3, 0.02]}
      />
    </RigidBody>
  );
}

export default TouchPadPhysics;
