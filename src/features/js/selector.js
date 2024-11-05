import { createSelector } from "@reduxjs/toolkit";

const rooms = (state) => state.rooms;

// General selector for retrieving a puzzle state
const makeSolvedPuzzleSelector = (puzzleKey) =>
  createSelector([rooms], (state) => state[puzzleKey]);

// Selectors for each puzzle
const solvedPuzzles = {
  solvedPuzzle_1: makeSolvedPuzzleSelector("solvedPuzzle_1"),
  solvedPuzzle_2: makeSolvedPuzzleSelector("solvedPuzzle_2"),
  solvedPuzzle_3: makeSolvedPuzzleSelector("solvedPuzzle_3"),
  solvedPuzzle_4: makeSolvedPuzzleSelector("solvedPuzzle_4"),
};

// Selector for current room
const currentRoom = createSelector([rooms], (state) => state.currentRoom);

// Selector for other states
const contactRoomSounds = createSelector(
  [rooms],
  (state) => state.contactRoomSounds
);
const animateHolo1Text = createSelector(
  [rooms],
  (state) => state.animateHolo1Text
);

const characterMessenger = createSelector(
  [rooms],
  (state) => state.characterMessenger
);

// Exporting selectors
export const selector_rooms = {
  currentRoom,
  ...solvedPuzzles,
  contactRoomSounds,
  animateHolo1Text,
  characterMessenger,
};
