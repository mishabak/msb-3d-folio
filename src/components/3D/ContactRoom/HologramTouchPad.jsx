import { useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TOUCH_PAD_PROPERTY } from "../../../util/constants";
import TouchPadPhysics from "./TouchPadPhysics";

export function HologramTouchPad(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/hologramTouchPad.glb"
  );
  const { actions } = useAnimations(animations, group);

  const CustomMesh = ({ name, material, position = [0, 0, 0], scale = 1 }) => {
    return (
      <mesh
        name={name}
        geometry={nodes[name].geometry}
        material={materials[material]}
        position={position}
        scale={scale}
      />
    );
  };

  const Collision = () => {
    let isEnter = null;
    let keyFrameFlag = 0;
    let isKeboardStable = false;

    const handleAnimation = () => {
      if (keyFrameFlag == 1) {
        keyFrameFlag = 0;
        [
          "FooterAction",
          "KeyboardAction",
          "KeyboardFrameAction",
          "LeftLeafAction",
          "RightLeafAction",
          "StandAction",
        ].forEach((keyName) => {
          let currentTime = actions[keyName].time;
          actions[keyName].paused = false;
          actions[keyName].timeScale = isEnter ? 1 : -1;
          actions[keyName].clampWhenFinished = true;
          actions[keyName].reset().time = currentTime;
          actions[keyName].setLoop(2200);
          actions[keyName].play();
        });
      }
    };

    const handleFinished = ({ action }) => {
      const clip = action.getClip();
      if (clip.name === "KeyboardAction") {
        isKeboardStable = true;
      }
    };

    useEffect(() => {
      const keyboardAction = actions["KeyboardAction"];
      const mixer = keyboardAction.getMixer();

      mixer.addEventListener("finished", handleFinished);
      return () => {
        mixer.removeEventListener("finished", handleFinished);
      };
    }, []);

    // color grade
    let red = 3;
    let green = 0.2;
    let blue = 0.2;

    function handleKeyboardColor() {
      if (red > 0.2 && 0.2 >= blue) {
        green = parseFloat((green + 0.01).toFixed(2));
        red = parseFloat((red - 0.01).toFixed(2));
      } else if (green > 0.2) {
        blue = parseFloat((blue + 0.01).toFixed(2));
        green = parseFloat((green - 0.01).toFixed(2));
      } else if (blue > 0.2) {
        red = parseFloat((red + 0.01).toFixed(2));
        blue = parseFloat((blue - 0.01).toFixed(2));
      }
      materials["Material"].color.setRGB(red, green, blue);
    }

    useFrame(() => {
      handleAnimation();
      isKeboardStable && handleKeyboardColor();
    });

    let timeOut = null;
    let handleTimeout = (bool) => {
      timeOut = setTimeout(() => {
        if (!bool) {
          isKeboardStable = false;
        }

        isEnter = bool;
        keyFrameFlag = 1;
        timeOut = null;
      }, 1000);
    };

    return (
      <RigidBody
        onCollisionEnter={() => {
          timeOut && clearTimeout(timeOut);
          if (!isEnter) {
            actions.FooterAction.paused = true;
            handleTimeout(true);
          }
        }}
        onCollisionExit={() => {
          timeOut && clearTimeout(timeOut);
          if (isEnter) {
            actions.FooterAction.paused = true;
            handleTimeout(false);
          }
        }}
        type="fixed"
        colliders={"cuboid"}
      >
        <group
          name="floor"
          position={[0.628, 0.005, 0]}
          scale={[0.381, 0.003, 0.381]}
        >
          {TOUCH_PAD_PROPERTY.floor.map((data) => (
            <CustomMesh key={data.name} {...data} />
          ))}
        </group>
      </RigidBody>
    );
  };

  return (
    <group
      ref={group}
      {...props}
      scale={1}
      position={[0, -0.52, 1.5]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <group name="Scene">
        {TOUCH_PAD_PROPERTY.pad.map((data) => (
          <CustomMesh key={data.name} {...data} />
        ))}
      </group>
      <TouchPadPhysics />
      <Collision />
    </group>
  );
}

useGLTF.preload("/models/hologramTouchPad.glb");
