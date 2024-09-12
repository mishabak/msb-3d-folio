import reducers from "./reducers";
import initialState from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "layout",
  initialState,
  reducers,
});

export default reducer;
export const action_layout = actions;
