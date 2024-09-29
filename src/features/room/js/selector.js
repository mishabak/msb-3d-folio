import { createSelector } from "@reduxjs/toolkit";

const rooms = (state) => state.rooms;

// door propery include position rotation and it's name (static data)
const doorProperty = createSelector(
  [rooms],
  ({ doorProperty }) => doorProperty
);


export const selector_rooms = { doorProperty };
