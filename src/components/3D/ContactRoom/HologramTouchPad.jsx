import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useDebounce } from "use-debounce";
import { Fragment, useEffect, useState } from "react";

export function HologramTouchPad(props) {
  const { nodes, materials } = useGLTF("/models/hologramTouchPad.glb");

  const Collision = () => {
    const [isEnter, setIsEnter] = useState(false);
    const IsEnterStable = useDebounce(isEnter, isEnter ? 1000 : 200);

    useEffect(() => {
      console.log(IsEnterStable[0], "😀");
    }, [IsEnterStable[0]]);

    return (
      <RigidBody
        onCollisionEnter={() => {
          setIsEnter(true);
        }}
        onCollisionExit={() => {
          setIsEnter(false);
        }}
        type="fixed"
        colliders={"cuboid"}
      >
        <group position={[1.608, 2.241, 0.463]} scale={[0.381, 0.003, 0.381]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.Material}
          />
        </group>
      </RigidBody>
    );
  };

  return (
    <Fragment>
      <group
        {...props}
        scale={1}
        position={[0.4, -2.75, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        dispose={null}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KeyboardFrame.geometry}
          material={materials["Material.002"]}
          position={[0.972, 3.419, 0.463]}
          rotation={[0, 0, -0.717]}
          scale={[0.261, 0.008, 0.352]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftLeaf.geometry}
          material={materials["Material.002"]}
          position={[0.971, 2.947, 0.458]}
          scale={[0.129, 0.666, 0.096]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Footer.geometry}
          material={materials["Material.002"]}
          position={[1.008, 2.259, 0.463]}
          scale={[0.218, 0.021, 0.226]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Keyboard.geometry}
          material={materials["Material.001"]}
          position={[1.014, 3.461, 0.462]}
          rotation={[0, 0, -0.708]}
          scale={[0.192, 0.016, 0.268]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightLeaf.geometry}
          material={materials["Material.002"]}
          position={[0.971, 2.947, 0.48]}
          scale={[0.129, 0.666, 0.096]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stand.geometry}
          material={materials["Material.002"]}
          position={[0.971, 2.862, 0.463]}
          scale={[0.053, 0.586, 0.053]}
        />
        <Collision />
      </group>
    </Fragment>
  );
}

useGLTF.preload("/models/hologramTouchPad.glb");
