import { Audio, AudioListener, AudioLoader } from "three";

function useAudio({ url }) {
  const listener = new AudioListener();
  const audio = new Audio(listener);
  const audioLoader = new AudioLoader();
  let isInitialized = false;

  const initialize = async () => {
    try {
      if (!isInitialized) {
        let buffer = await audioLoader.loadAsync(url);
        console.log("INITIALIZE AUDIO");
        audio.setBuffer(buffer);
        audio.setVolume(0.3);
        audio.setLoop(false);
        isInitialized = true;
      } else {
        console.log("USE PRE INITIALIZED AUDIO");
      }
    } catch (error) {
      isInitialized = false;
    }
  };
  return { audio, initialize };
}

export default useAudio;
