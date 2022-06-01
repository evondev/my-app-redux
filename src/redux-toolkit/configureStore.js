import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice, { increment, incrementByValue } from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});
// My custom middleware to logger store state
// const loggerMiddleware = (store) => (next) => (action) => {
//   // your code here
//   console.log(action);
//   action.payload = 10;
//   next(action);
// };
// redux-logger
// const loggerMiddleware = function (store) {
//   return function (next) {
//     return function (action) {
//       // your code here
//     };
//   };
// };
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
});
// store.subscribe(() => {
//   //  javascript observer pattern
//   console.log(`current state: ${store.getState().counter.count}`);
// });
store.dispatch(incrementByValue(1));
// store.dispatch(incrementByValue(3));
// store.dispatch(incrementByValue(5));
export default store;
