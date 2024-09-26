import layout from "../features/layout/js/slice";
import rooms from "../features/room/js/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    layout,
    rooms,
  },
});
