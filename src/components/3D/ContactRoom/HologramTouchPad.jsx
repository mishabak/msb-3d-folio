import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useDebounce } from "use-debounce";
import { Fragment, useEffect, useRef, useState } from "react";
export function HologramTouchPad(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/hologramTouchPad.glb"
  );
  const { actions } = useAnimations(animations, group);
  const Collision = () => {
    const [isEnter, setIsEnter] = useState(null);
    const IsEnterStable = useDebounce(isEnter, 1917);

    const handleAnimation = async (keyName) => {
      if (actions[keyName]) {
        actions[keyName].repetitions = 1;
        actions[keyName].clampWhenFinished = true;
        if (IsEnterStable[0]) {
          actions[keyName].timeScale = 1;
          actions[keyName]?.play();
        } else if (!IsEnterStable[0]) {
          actions[keyName].timeScale = -1;
          actions[keyName]?.play();
        }
      }
    };

    useEffect(() => {
      
      [
        "FooterAction",
        "KeyboardAction",
        "KeyboardFrameAction",
        "LeftLeafAction",
        "RightLeafAction",
        "StandAction",
      ].forEach((keyName) => handleAnimation(keyName));

      return () => {
        actions.FooterAction.stop();
        actions.KeyboardAction.stop();
        actions.KeyboardFrameAction.stop();
        actions.LeftLeafAction.stop();
        actions.RightLeafAction.stop();
        actions.StandAction.stop();
      };
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
        <group
          name="floor"
          position={[0.6, 0.005, 0]}
          scale={[0.381, 0.003, 0.381]}
        >
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            name="Cube_1"
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
        ref={group}
        {...props}
        scale={1}
        position={[0, -0.52, 1.5]}
        rotation={[0, -Math.PI / 2, 0]}
        dispose={null}
      >
        <mesh
          name="KeyboardFrame"
          geometry={nodes.KeyboardFrame.geometry}
          material={materials["Material.002"]}
          position={[0.064, 1.282, 0]}
          scale={0}
        />
        <mesh
          name="LeftLeaf"
          geometry={nodes.LeftLeaf.geometry}
          material={materials["Material.002"]}
          position={[-0.037, 0.711, 0.795]}
          scale={0}
        />
        <mesh
          name="Footer"
          geometry={nodes.Footer.geometry}
          material={materials["Material.002"]}
          position={[0, -0.031, 0]}
          scale={0}
        />
        <mesh
          name="Keyboard"
          geometry={nodes.Keyboard.geometry}
          material={materials["Material.001"]}
          position={[-0.028, 1.221, -0.001]}
          scale={0}
        />
        <mesh
          name="RightLeaf"
          geometry={nodes.RightLeaf.geometry}
          material={materials["Material.002"]}
          position={[-0.037, 0.711, -0.783]}
          scale={0}
        />
        <mesh
          name="Stand"
          geometry={nodes.Stand.geometry}
          material={materials["Material.002"]}
          position={[-0.038, -0.041, 0.002]}
          scale={0}
        />

        <Collision />
      </group>
    </Fragment>
  );
}

useGLTF.preload("/models/hologramTouchPad.glb");
