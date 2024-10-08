import { animated, useSpring } from "@react-spring/three";
import { memo } from "react";

function PuzzlePiece({ position, nodes, materials, texture, handleClick, id }) {
  const [spring, api] = useSpring(() => ({
    position: position,
    config: {
      duration: 300,
      precision: 0.16,
      tension: 1000,
      friction: 20,
    },
  }));

  const play = (newPosition, callback) => {
    api.start({
      position: [newPosition.x, newPosition.y, 0],
      onRest: () => {
        // use SetTimeout for do the job after complete animation
        setTimeout(() => {
          callback();
        }, 0);
      },
    });
  };
  return (
    <animated.group
      name={nodes[`piece_${id}`]?.name}
      onClick={(e) => {
        handleClick(e, play);
      }}
      position={spring.position}
      scale={[0.076, 0.076, 0.008]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[`piece_${id}_1`]?.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes[`piece_${id}_2`]?.geometry}
        material={materials[texture]}
      />
    </animated.group>
  );
}

export default memo(PuzzlePiece);
