import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  return (
    <div>
      <h2>The count from App is: {count}</h2>
      {/*
      Props drilling
      <CounterGrandpa count={count} setCount={setCount}>
      <CounterParent count={count} setCount={setCount}>
      <Counter count={count} setCount={setCount}></Counter>
      </CounterParent>
      </CounterGrandpa> */}
      {/*  */}
      <Counter></Counter>
    </div>
  );
}
// CounterGrandpa -> CounterParent -> Counter
export default App;
