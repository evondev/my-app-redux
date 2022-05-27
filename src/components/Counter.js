import React, { useState } from "react";

const Counter = (props) => {
  const { count, setCount } = props;
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
