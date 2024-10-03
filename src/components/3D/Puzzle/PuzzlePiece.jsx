import { animated, useSpring } from "@react-spring/three";

function PuzzlePiece({ position, geometry, material, handleClick, name }) {
  const [spring, api] = useSpring(() => ({
    position: position,
    config: { duration:350 },
  }));

  const play = (newPosition, callback) => {
    api.start({
      position: [newPosition.x, newPosition.y, 0],
      onRest: () => {
        callback();
      },
    });
  };

  return (
    <animated.mesh
      name={name}
      onClick={(e) => {
        handleClick(e, play);
      }}
      position={spring.position}
      scale={[0.076, 0.076, 0.008]}
      castShadow
      receiveShadow
      geometry={geometry}
      material={material}
    />
  );
}

export default PuzzlePiece;
