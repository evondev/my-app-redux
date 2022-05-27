import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
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
      <Counter count={count} setCount={setCount}></Counter>
    </div>
  );
}
// CounterGrandpa -> CounterParent -> Counter
export default App;
