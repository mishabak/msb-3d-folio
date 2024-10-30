import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

function useKeyboardPad({ actions, materials }) {
  const colorRef = useRef({ red: 3, blue: 0.2, green: 0.2 });
  const flagRef = useRef({
    timeOut: null,
    isEnter: null,
    keyFrameFlag: 0,
    isKeyboardVisible: false,
  });

  function handleFinished({ action }) {
    const clip = action.getClip();
    if (clip.name === "KeyboardAction") {
      flagRef.current.isKeyboardVisible = true;
    }
  }

  function handleAnimation() {
    if (flagRef.current.keyFrameFlag == 1) {
      flagRef.current.keyFrameFlag = 0;
      [
        "FooterAction",
        "KeyboardAction",
        "KeyboardFrameAction",
        "LeftLeafAction",
        "RightLeafAction",
        "StandAction",
      ].forEach((keyName) => {
        let currentTime = actions[keyName].time;
        actions[keyName].timeScale = flagRef.current.isEnter ? 1 : -1;
        actions[keyName].clampWhenFinished = true;
        actions[keyName].reset().time = currentTime;
        actions[keyName].setLoop(2200);
        actions[keyName].play();
      });
    }
  }

  function handleTimeout(isCollide) {
    flagRef.current.timeOut = setTimeout(() => {
      flagRef.current.isKeyboardVisible = isCollide;
      flagRef.current.isEnter = isCollide;
      flagRef.current.keyFrameFlag = 1;
      flagRef.current.timeOut = null;
    }, 1000);
  }

  function handleCollision(isCollide) {
    flagRef.current.timeOut && clearTimeout(flagRef.current.timeOut);
    if (
      (isCollide && !flagRef.current.isEnter) ||
      (!isCollide && flagRef.current.isEnter)
    ) {
      handleTimeout(isCollide);
    }
  }

  function assignSign(clr, signs) {
    colorRef.current[clr] = parseFloat(
      (colorRef.current[[clr]] + signs * 0.01).toFixed(2)
    );
  }

  function handleKeyboardColor() {
    if (colorRef.current.red > 0.2 && 0.2 >= colorRef.current.blue) {
      assignSign("green", +1);
      assignSign("red", -1);
    } else if (colorRef.current.green > 0.2) {
      assignSign("blue", +1);
      assignSign("green", -1);
    } else if (colorRef.current.blue > 0.2) {
      assignSign("red", +1);
      assignSign("blue", -1);
    }

    materials["Material"].color.setRGB(
      colorRef.current.red,
      colorRef.current.green,
      colorRef.current.blue
    );
  }

  useFrame(() => {
    handleAnimation();
    flagRef.current.isKeyboardVisible && handleKeyboardColor();
  });

  useEffect(() => {
    const keyboardAction = actions["KeyboardAction"];
    const mixer = keyboardAction.getMixer();
    mixer.addEventListener("finished", handleFinished);
    return () => {
      mixer.removeEventListener("finished", handleFinished);
    };
  }, []);

  return { handleCollision };
}

export default useKeyboardPad;
