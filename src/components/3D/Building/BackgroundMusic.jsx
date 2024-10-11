import { Fragment, useEffect } from "react";
import { selector_rooms } from "../../../features/Room/js/selector";
import { useSelector } from "react-redux";

function BackgroundMusic({ name, audio }) {
  const sd = useSelector(selector_rooms.bgMusicFor);
  useEffect(() => {
    if (sd == name) {
      // audio.setLoop(true);
      // audio?.play();
    }

    return () => {
      // audio?.stop();
    };
  }, [sd]);

  return <Fragment />;
}

export default BackgroundMusic;
