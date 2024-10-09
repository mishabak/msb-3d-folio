import { useSpring } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import useAudio from "../../../hooks/useAudio";

function useDoor() {
  const [DoorState, SetDoorState] = useState("DEFAULT");
  const [isDoorUnLock, setDoorUnLock] = useState(false);
  const [preventClick, setPreventClick] = useState(false);
  const openDoor = useAudio({ url: "/audio/open-door.wav" });
  const closeDoor = useAudio({ url: "/audio/close-door.wav" });
  const doorRigdRef = useRef();
  const [test, setTest] = useState({
    rotation: [0, 0, 0],
    position: [0, 0, 0],
  });

  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 4, tension: 150, friction: 100 },

    onChange: ({ value }) => {
      setPreventClick(true);
      let zTransition = value?.rotation[2];
      function calculateB(Match) {
        const zIndexMax = -1.9;
        const zIndexMin = 0;
        if (zTransition === 0) {
          return 0;
        }
        const B =
          ((zTransition - zIndexMax) / (zIndexMin - zIndexMax)) * (0 - Match) +
          Match;
        return B;
      }
      setTest({
        rotation: [calculateB(0.04), 0, calculateB(-1.86)],
        position: [calculateB(-1.4), calculateB(-1.2), 0],
      });
    },
    onRest: () => {
      setPreventClick(false);
    },
  }));

  useEffect(() => {
    switch (DoorState) {
      case "OPEN":
        api.start({
          rotation: [0, 0, -1.9],
          config: { tension: 100, friction: 23 },
        });
        break;

      case "CLOSE":
        api.start({ rotation: [0, 0, 0], config: { friction: 60 } });
        break;
    }
  }, [DoorState]);

  useEffect(() => {
    if (isDoorUnLock) {
      SetDoorState("OPEN");
      closeDoor.audio.play();
    } else {
      SetDoorState("CLOSE");
    }
  }, [isDoorUnLock]);

  const handleClick = () => {
    if (isDoorUnLock && !preventClick)
      SetDoorState((prev) => {
        if (prev == "OPEN") {
          closeDoor.audio.play();
          openDoor.audio.stop();
          return "CLOSE";
        } else {
          openDoor.audio.play();
          closeDoor.audio.stop();
          return "OPEN";
        }
      });
  };

  // callback for trigger door audio if pizzle solve
  const cback1 = (flag) => {
    if (flag) {
      if (DoorState == "OPEN") return;
      openDoor.audio.play();
      closeDoor.audio.stop();
    } else {
      if (DoorState == "CLOSE") return;
      openDoor.audio.stop();
      closeDoor.audio.play();
    }
  };

  return {
    handleClick,
    setDoorUnLock,
    cback1,
    isDoorUnLock,
    doorRigdRef,
    springs,
    openDoor,
    closeDoor,
    test,
  };
}

export default useDoor;
