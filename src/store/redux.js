import layout from "../features/layout/js/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    layout,
  },
});
