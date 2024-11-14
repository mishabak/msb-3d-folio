export default {
  setFloorColider: (state, { payload }) => {
    state.currentRoom = payload;
  },
  setPuzzleSolved: (state, { payload }) => {
    if (payload.id)
      state[`solvedPuzzle_${payload.id}`] = payload.value || false;
  },
  setContactRoomSounds: (state, { payload }) => {
    state.contactRoomSounds = payload;
  },
  setAnimateHolo1Text: (state, { payload }) => {
    state.animateHolo1Text = payload;
  },
  setCharacterMessenger: (state, { payload }) => {
    state.characterMessenger.visible = payload?.visible || false;
    state.characterMessenger.text = payload?.text || "";
    state.characterMessenger.forFieldError = payload?.forFieldError || false;
  },
  setIsIntroPage: (state, { payload }) => {
    state.isIntroPage = payload;
  },
  setContactDetails: (state, { payload }) => {
    if (payload.name) {
      state.contactDetails[payload.name] = {
        value: payload.value || "",
        isValid: payload?.isValid,
      };
    }
  },
  setContactIsValid: (state, { payload }) => {
    state.contactDetails.fullName.isValid = payload?.fullName;
    state.contactDetails.email.isValid = payload?.email;
    state.contactDetails.message.isValid = payload?.message;
  },
  resetContactDetails: (state) => {
    state.contactDetails = {
      fullName: { value: "", isValid: null },
      email: { value: "", isValid: null },
      message: { value: "", isValid: null },
    };
  },
};
