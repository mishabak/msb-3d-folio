import rooms from "../features/js/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    rooms,
  },
});
