import React, { useEffect } from "react";
import useAudio from "../../../hooks/useAudio";

function useKeyboardAudio() {
  const TypingKey = [
    useAudio({ url: "/audio/typing/key1.mp3" }),
    useAudio({ url: "/audio/typing/key2.mp3" }),
    useAudio({ url: "/audio/typing/key3.mp3" }),
    useAudio({ url: "/audio/typing/key4.mp3" }),
    useAudio({ url: "/audio/typing/key5.mp3" }),
    useAudio({ url: "/audio/typing/key6.mp3" }),
    useAudio({ url: "/audio/typing/key7.mp3" }),
    useAudio({ url: "/audio/typing/key8.mp3" }),
  ];
  const backKey = useAudio({ url: "/audio/typing/delete.mp3" });

  // Pre-initialize the audio (if necessary)
  useEffect(() => {
    TypingKey.forEach((audio) => audio.initialize());
    backKey.initialize();
  }, []);

  const handleKeyPress = (event) => {
    // Only run if the focus is on input or text area
    window.isTyping = true;
    if (window.extraVision === "INPUT" || window.extraVision === "TEXT_AREA") {
      const randomAudio =
        TypingKey[Math.floor(Math.random() * TypingKey.length)];
      try {
        if (event.key == "Backspace") {
          !backKey.audio.isPlaying && backKey.audio.play();
        } else {
          !randomAudio.audio.isPlaying && randomAudio.audio.play();
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
  };

  function handleKeyUp() {
    window.isTyping = false;
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [TypingKey]);

  return {};
}

export default useKeyboardAudio;
