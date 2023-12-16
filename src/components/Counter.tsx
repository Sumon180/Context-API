import React from "react";
import { useCounterContext } from "../context/CounterContext";

const Counter: React.FC = () => {
  const { state, dispatch } = useCounterContext();

  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h3>Count {state.count}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
