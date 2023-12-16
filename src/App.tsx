import React, { useEffect } from "react";
import Counter from "./components/Counter";
import { useCounterContext } from "./context/CounterContext";

const App: React.FC = () => {
  const { state } = useCounterContext();

  useEffect(() => {
    document.title = `Count: ${state.count}`;
    return () => {
      document.title = "React App";
    };
  }, [state.count]);

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <Counter />
      </div>
    </>
  );
};

export default App;
