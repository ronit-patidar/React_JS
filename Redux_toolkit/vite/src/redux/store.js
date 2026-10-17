import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/couterSlice.js'
export const store = configureStore({
  reducer:{
    counter:counterReducer
  }
});