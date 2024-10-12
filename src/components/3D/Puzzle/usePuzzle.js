import { selectRandomConfiguration } from "../../../util/selectRandomConfiguration";
import { PUZZLE_PROPERTY } from "../../../util/constants";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

function usePuzzle({ setDoorUnLock, callbackPuzzleSloved, PuzzleAudio }) {
  const { nodes, materials } = useGLTF("./models/puzzle.glb");
  const [shuffledPuzzle, setShuffledPuzzle] = useState([]);
  const EmptyPiece = [0.32, 0.148, 0];
  const EmptyRef = useRef();
  const groupRef = useRef();
  const [progress, setProgress] = useState(0);

  // when puzzle piece click -->>
  const handleClick = (e, play) => {
    const { position } = e.eventObject;
    const emptyPos = EmptyRef.current.position;
    const isSameX = position.x === emptyPos.x;
    const isSameY = position.y === emptyPos.y;
    const isCloseY = Math.abs(position.y - emptyPos.y) <= 0.163;
    const isCloseX = Math.abs(position.x - emptyPos.x) <= 0.16;

    if ((isSameX && isCloseY) || (isSameY && isCloseX)) {
      let Swap = { ...position };

      play(emptyPos, () => {
        [emptyPos.x, emptyPos.y] = [Swap.x, Swap.y];
        let flag = 0;
        PuzzleAudio.audio.play();
        groupRef.current.children.forEach((data, idx) => {
          let actualPosition = PUZZLE_PROPERTY[idx].position;
          let newPosition = data.position;

          if (
            actualPosition[0] != newPosition.x ||
            actualPosition[1] != newPosition.y
          ) {
            flag++;
          }
        });

        setProgress(flag);
        if (flag == 0) {
          setDoorUnLock(true);
          callbackPuzzleSloved(true);
        } else {
          setDoorUnLock((prev) => {
            if (prev) {
              callbackPuzzleSloved(false);
            }
            return false;
          });
        }
      });
    }
  };

  useEffect(() => {
    const randomizedPuzzle = selectRandomConfiguration();
    setShuffledPuzzle(randomizedPuzzle);
  }, []);

  return {
    EmptyRef,
    materials,
    EmptyPiece,
    shuffledPuzzle,
    handleClick,
    groupRef,
    nodes,
    progress,
  };
}
useGLTF.preload("/puzzle.glb");
export default usePuzzle;
