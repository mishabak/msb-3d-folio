import { selectRandomConfiguration } from "../../../util/selectRandomConfiguration";
import { PUZZLE_PROPERTY } from "../../../util/constants";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch } from "react-redux";
import { action_rooms } from "../../../features/js/slice";

function usePuzzle({ doorId, PuzzleAudio }) {
  const { nodes, materials } = useGLTF("./models/puzzle.glb");
  const dispatch = useDispatch();
  const [shuffledPuzzle, setShuffledPuzzle] = useState([]);
  const EmptyPiece = [0.32, 0.148, 0];
  const EmptyRef = useRef();
  const groupRef = useRef();
  let preventClk = false;
  let isSolved = false;
  // when puzzle piece click -->>
  const handleClick = (e, play) => {
    if (preventClk || PuzzleAudio?.audio?.isPlaying || isSolved) return;
    preventClk = true;

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

        if (flag == 0) {
          isSolved = true;
          dispatch(action_rooms.setPuzzleSolved({ id: doorId, value: true }));
        } else {
          dispatch(action_rooms.setPuzzleSolved({ id: doorId, value: false }));
        }
        preventClk = false;
      });
    } else {
      preventClk = false;
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
  };
}
useGLTF.preload("/puzzle.glb");
export default usePuzzle;
