import { combineReducers } from "@reduxjs/toolkit";
import newsSlice from "../redux-thunk/newsSlice";

export const reducer = combineReducers({
  news: newsSlice,
});
