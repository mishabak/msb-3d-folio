import * as THREE from "three";

function useAudio({ url }) {
  const listener = new THREE.AudioListener();
  const audio = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load(url, (buffer) => {    
    audio.setBuffer(buffer);
    audio.setVolume(0.3);
    audio.setLoop(false);
    console.log("tewe..");
    
  });
  return { audio };
}

export default useAudio;
