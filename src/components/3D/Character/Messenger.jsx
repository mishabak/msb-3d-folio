import { useDispatch, useSelector } from "react-redux";
import { selector_rooms } from "../../../features/js/selector";
import { Text, useGLTF } from "@react-three/drei";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";
import { action_rooms } from "../../../features/js/slice";
import { useSpring, animated } from "@react-spring/three";

function Messenger() {
  const characterMessenger = useSelector(selector_rooms.characterMessenger);
  const { nodes } = useGLTF("/models/Messenger.glb");
  const [spring, api] = useSpring(() => ({
    scale: 1,
    position: [-0.4, 1.5, 0.6],
    config: { duration: 100 },
  }));
  const dispatch = useDispatch();
  const debounse = useDebounce(
    characterMessenger,
    characterMessenger.forFieldError ? 5500 : 2500
  );

  useEffect(() => {
    if (debounse[0]?.visible) {
      api.start({ scale: 1, position: [-0.4, 1.5, 0.6] });
      dispatch(action_rooms.setCharacterMessenger());
    }
  }, [debounse[0]]);

  useEffect(() => {
    if (characterMessenger?.visible) {
      api.start({ scale: 1.4, position: [-0.4, 1.5, 0.1] });
    }
  }, [characterMessenger]);

  return (
    <animated.group
      visible={characterMessenger.visible}
      scale={spring.scale}
      position={spring.position}
    >
      <mesh
        position={[0, 0, 0]}
        name="Messenger"
        geometry={nodes.Messenger.geometry}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[
          characterMessenger.forFieldError ? 0.115 : 0.085,
          0.155,
          characterMessenger.forFieldError ? 0.185 : 0.155,
        ]}
      >
        <meshStandardMaterial color={"white"} />
      </mesh>
      <Text
        maxWidth={characterMessenger.forFieldError ? 0.4 : 0.3}
        color={"blue"}
        outlineWidth={0.0002}
        fontSize={characterMessenger.forFieldError ? 0.025 : 0.028}
        scale={0.8}
        position={[0, 0, -0.001]}
        rotation={[0, Math.PI, 0]}
        whiteSpace={"overflowWrap"}
        overflowWrap={"break-word"}
        textAlign={"center"}
      >
        {characterMessenger.text}
      </Text>
    </animated.group>
  );
}

export default Messenger;
