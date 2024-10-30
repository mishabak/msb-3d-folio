import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { GirlCharacter } from "./Girl";
import useCharacter from "./useCharacter";

function Index() {
  const { rb, charRef } = useCharacter();

  return (
    <RigidBody
      lockRotations
      ref={rb}
      colliders={false}
      scale={0.35}
      // position={[-13, 0.1, 10]}
      position={[-12, 0.1, -5]}
    >
      <group
        ref={charRef}
        position={[0, 1.7, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <GirlCharacter />
      </group>
      <CapsuleCollider position={[0, 4, 0]} args={[1.4, 1]} />
    </RigidBody>
  );
}

export default Index;
