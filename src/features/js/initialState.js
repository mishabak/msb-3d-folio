export default {
  currentRoom: null,
  // initial state for puzzle  -->>
  solvedPuzzle_1: false,
  solvedPuzzle_2: true,
  solvedPuzzle_3: true,
  solvedPuzzle_4: true,
  contactRoomSounds: {
    play: false,
    type: "UNKNOWN",
  },
  animateHolo1Text: false,
  characterMessenger: {
    visible: false,
    text: "",
    forFieldError:false,
  },
  isIntroPage: true,
  contactDetails: {
    fullName: { value: "", isValid: null },
    email: { value: "", isValid: null },
    message: { value: "", isValid: null },
  },
};
