import { useEffect } from "react";
import useAudio from "../../../hooks/useAudio";

function useDoorBase() {
  const PuzzleAudio = useAudio({ url: "/audio/puzzle/swap.mp3" });
  const openDoorAudio = useAudio({ url: "/audio/door/open-door.wav" });
  const closeDoorAudio = useAudio({ url: "/audio/door/close-door.wav" });

  useEffect(() => {
    PuzzleAudio.initialize();
    openDoorAudio.initialize();
    closeDoorAudio.initialize();
  }, []);

  return { closeDoorAudio, openDoorAudio, PuzzleAudio };
}

export default useDoorBase;
