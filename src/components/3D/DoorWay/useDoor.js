import { useSpring } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selector_rooms } from "../../../features/js/selector";

function useDoor({ closeDoorAudio, openDoorAudio, doorNo }) {
  const [DoorState, SetDoorState] = useState("DEFAULT");
  const isPuzzleSolved = useSelector(selector_rooms[`solvedPuzzle_${doorNo}`]);

  const PREVENT_CLICK = useRef(false);
  const DOOR_POSITION = useRef(null);
  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 4, tension: 150, friction: 100 },

    onChange: ({ value }) => {
      PREVENT_CLICK.current = true;
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
      DOOR_POSITION.current = {
        position: [calculateB(-1.4), calculateB(-1.2), 0],
        rotation: [calculateB(0.04), 0, calculateB(-1.86)],
      };
    },
    onRest: () => {
      DOOR_POSITION.current = false;
      PREVENT_CLICK.current = false;
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


  const handleClick = () => {
    if (isPuzzleSolved && !PREVENT_CLICK.current)
      SetDoorState((prev) => {
        if (prev == "OPEN") {
          openDoorAudio.audio.stop();
          closeDoorAudio.audio.play();
          return "CLOSE";
        } else {
          closeDoorAudio.audio.stop();
          openDoorAudio.audio.play();
          return "OPEN";
        }
      });
  };

  return {
    springs,
    handleClick,
    DOOR_POSITION,
  };
}

export default useDoor;
