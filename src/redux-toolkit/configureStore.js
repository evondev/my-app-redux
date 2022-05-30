import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

const store = configureStore({
  reducer,
});

export default store;
