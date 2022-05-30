import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux-toolkit/counterSlice";
// import { decrement, increment, incrementByValue } from "../redux/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  // // Write new function name handleDecrement
  const handleDecrement = () => {
    dispatch(decrement());
  };
  // // handleIncrementByValue
  const handleIncrementByValue = () => {
    dispatch(incrementByValue({ value: 10 }));
  };

  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex items-center justify-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrementByValue}
        >
          Increase by 10
        </button>
        {/*
         */}
      </div>
    </div>
  );
};

export default Counter;
