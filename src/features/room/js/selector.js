import { createSelector } from "@reduxjs/toolkit";

const rooms = (state) => state.rooms;

// door propery include position rotation and it's name (static data)
const doorProperty = createSelector(
  [rooms],
  ({ doorProperty }) => doorProperty
);

// puzzle propery rotation and it's name (static data)
//  property use for unlock the doors by matching puzzle image.
const puzzleProperty = createSelector(
  [rooms],
  ({ puzzleProperty }) => puzzleProperty
);

export const selector_rooms = { doorProperty, puzzleProperty };
