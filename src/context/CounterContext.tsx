import { createContext, useReducer, useContext, ReactNode, FC } from "react";

// TypeScript types
type CounterState = {
  count: number;
};

type CounterAction =
  | { type: "INCREASE" }
  | { type: "DECREASE" }
  | { type: "RESET" };

type CounterDispatch = (action: CounterAction) => void;

// Initial state
const initialState: CounterState = {
  count: 0,
};

// Context for state and dispatch
const CounterContext = createContext<
  { state: CounterState; dispatch: CounterDispatch } | undefined
>(undefined);

// Reducer function
const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Context provider component
export const CounterProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook for using the context
export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within an CounterProvider");
  }
  return context;
};
