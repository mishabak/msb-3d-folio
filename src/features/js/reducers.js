export default {
  setFloorColider: (state, { payload }) => {
    state.currentRoom = payload;
  },
  setPuzzleSolved: (state, { payload }) => {
    if (payload.id)
      state[`solvedPuzzle_${payload.id}`] = payload.value || false;
  },
};
