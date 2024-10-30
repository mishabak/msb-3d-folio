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
};
