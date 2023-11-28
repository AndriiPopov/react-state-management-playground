import { configureStore } from "@reduxjs/toolkit";
import { withUseState } from "@rtbjs/use-state";

export const store = configureStore({
  reducer: withUseState({}),
});
