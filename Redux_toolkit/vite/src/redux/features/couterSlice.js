import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name : 'counter',
  initialState:{
    value:0
  },
  reducers:{
    increment : (state) => {
      state.value += 1
    },
    incrementByAmount : (state,amt) => {
      state.value += amt.payload
    },
    decrement : (state) => {
      state.value -= 1
    },
    decrementByAmount : (state,amt) => {
      state.value -= amt.payload
    }
  }
});
export const {increment,decrement,incrementByAmount,decrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;