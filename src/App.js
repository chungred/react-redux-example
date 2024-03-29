import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter1233345: {counter}</h1>
      <button onClick={() => dispatch(increment(10))} style={{marginRight: 10}}>Increase</button>
      <button onClick={() => dispatch(decrement(10))}>Decrease</button>
    </div>
  );
}

export default App;