import reducers from "./reducers";
import initialState from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "rooms",
  initialState,
  reducers,
});

export default reducer;
export const action_rooms = actions;
