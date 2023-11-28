import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, isNotPositive: true };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.isNotPositive = state.count <= 0;
    },
    decrement: (state) => {
      state.count -= 1;
      state.isNotPositive = state.count <= 0;
    },
  },
});

export const selectCount = (state) => state.counter.count;
export const selectIsNotPositive = (state) => state.counter.isNotPositive;

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
