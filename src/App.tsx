import React, { useEffect } from "react";
import Counter from "./Components/Counter";
import { useAppContext } from "./context/CounterContext";

const App: React.FC = () => {
  const { state } = useAppContext();

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
