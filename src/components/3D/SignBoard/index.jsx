import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { LoopOnce } from "three";
import { useSelector } from "react-redux";
import { selector_rooms } from "../../../features/js/selector";

export default function Index({ doorNo }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/signBoard.glb");
  const { actions } = useAnimations(animations, group);
  const IsDoorUnlock = useSelector(selector_rooms[`solvedPuzzle_${doorNo}`]);

  useEffect(() => {
    let currentTime = actions.Animate.time;
    actions.Animate.clampWhenFinished = true;
    actions.Animate.timeScale = IsDoorUnlock ? 1 : -1;
    actions.Animate.reset().time = currentTime;
    actions.Animate.setLoop(LoopOnce);
    actions.Animate.play();
  }, [IsDoorUnlock]);

  return (
    <group
      position={[1.11, 0.2, -0.8]}
      scale={3}
      rotation={[Math.PI / 2, -Math.PI / 2, Math.PI]}
      ref={group}
    >
      <group name="Scene">
        <group
          name="Cylinder"
          position={[0, 0.162, -0.002]}
          rotation={[-2.308, -0.039, 3.106]}
          scale={[-0.002, -0.088, -0.002]}
        >
          <mesh
            name="Cylinder_1"
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Cylinder_2"
            geometry={nodes.Cylinder_2.geometry}
            material={materials.Closed}
          />
          <mesh
            name="Cylinder_3"
            geometry={nodes.Cylinder_3.geometry}
            material={materials.Open}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/signBoard.glb");
