import useAudio from "../../../hooks/useAudio";

function useDoorBase() {
  const closeDoorAudio = useAudio({ url: "/audio/door/close-door.wav" });
  const openDoorAudio = useAudio({ url: "/audio/door/open-door.wav" });
  const PuzzleAudio = useAudio({ url: "/audio/puzzle/puzzle.mp3" });
  return { closeDoorAudio, openDoorAudio, PuzzleAudio };
}

export default useDoorBase;
