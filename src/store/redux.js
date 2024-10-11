import rooms from "../features/room/js/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    rooms,
  },
});
