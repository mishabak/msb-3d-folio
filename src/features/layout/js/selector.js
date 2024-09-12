import { createSelector } from "@reduxjs/toolkit";

const layout = (state) => state.layout;
const theme = createSelector([layout], ({ theme }) => theme);
export const selector_layout = { theme };
