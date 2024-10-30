import { Fragment, useEffect } from "react";
import useAudio from "../../../hooks/useAudio";
import { useSelector } from "react-redux";
import { selector_rooms } from "../../../features/js/selector";

function Audio() {
  const inputSelectAudio = useAudio({
    url: "/audio/hologram/selectEffect.mp3",
  });
  const contactRoomSounds = useSelector(selector_rooms.contactRoomSounds);
  const handleSound = async () => {
    switch (contactRoomSounds.type) {
      case "INPUT":
      case "TEXT_AREA":
        await inputSelectAudio.initialize();
        contactRoomSounds.play
          ? inputSelectAudio.audio.play()
          : inputSelectAudio.audio.stop();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleSound();
  }, [contactRoomSounds.play, contactRoomSounds.type]);

  return <Fragment />;
}

export default Audio;
