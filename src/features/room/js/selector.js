import { createSelector } from "@reduxjs/toolkit";

const rooms = (state) => state.rooms;

// state for check character on which floor eg: room1_floor,room2_floor etc.
const currentRoom = createSelector([rooms], ({ currentRoom }) => currentRoom);

export const selector_rooms = {
  currentRoom,
};
