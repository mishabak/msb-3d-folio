import { createSelector } from "@reduxjs/toolkit";

const rooms = (state) => state.rooms;

// state for check character on which floor eg: room1_floor,room2_floor etc.
const currentRoom = createSelector([rooms], ({ currentRoom }) => currentRoom);

// create selector for puzzle solved state -->>
const solvedPuzzle_1 = createSelector(
  [rooms],
  ({ solvedPuzzle_1 }) => solvedPuzzle_1
);
const solvedPuzzle_2 = createSelector(
  [rooms],
  ({ solvedPuzzle_2 }) => solvedPuzzle_2
);
const solvedPuzzle_3 = createSelector(
  [rooms],
  ({ solvedPuzzle_3 }) => solvedPuzzle_3
);
const solvedPuzzle_4 = createSelector(
  [rooms],
  ({ solvedPuzzle_4 }) => solvedPuzzle_4
);

export const selector_rooms = {
  currentRoom,
  solvedPuzzle_1,
  solvedPuzzle_2,
  solvedPuzzle_3,
  solvedPuzzle_4,
};
