import { Fragment, useEffect, useRef } from "react";
import { selector_rooms } from "../../../features/js/selector";
import { useSelector } from "react-redux";

function BackgroundMusic({ name, audio, initialize }) {
  const currentRoom = useSelector(selector_rooms.currentRoom);
  const isIntroPage = useSelector(selector_rooms.isIntroPage);
  const afterPlaying = useRef(false);

  const triggerBgmusic = async () => {
    await initialize();
    audio.setLoop(true);
    audio.setVolume(0.3);
    audio?.play();
    afterPlaying.current = true;
  };

  const fadeOutAudio = (fadeDuration = 3000) => {
    const fadeInterval = 50;
    const fadeSteps = fadeDuration / fadeInterval;
    const volumeStep = audio.getVolume() / fadeSteps;

    const fadeIntervalId = setInterval(() => {
      const currentVolume = audio.getVolume();
      if (currentVolume > 0) {
        audio.setVolume(Math.max(currentVolume - volumeStep, 0));
      } else {
        clearInterval(fadeIntervalId);
        audio.stop();
      }
    }, fadeInterval);
  };

  useEffect(() => {
    if (currentRoom == name && !isIntroPage) {
      triggerBgmusic();
    }
    return () => {
      if (afterPlaying.current) {
        fadeOutAudio();
        afterPlaying.current = false;
      }
    };
  }, [currentRoom, isIntroPage]);

  return <Fragment />;
}

export default BackgroundMusic;
