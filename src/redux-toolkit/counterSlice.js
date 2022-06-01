import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    incrementByValue: (state, { payload }) => {
      // Handle logic code here
      return {
        ...state,
        count: state.count + payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
