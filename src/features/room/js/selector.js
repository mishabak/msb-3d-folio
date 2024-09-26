import { createSelector } from "@reduxjs/toolkit";

const rooms = (state) => state.rooms;
const doorProperty = createSelector(
  [rooms],
  ({ doorProperty }) => doorProperty
);
export const selector_rooms = { doorProperty };
