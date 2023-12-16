import { createContext, useReducer, useContext, ReactNode, FC } from "react";

// TypeScript types
type AppState = {
  count: number;
};

type AppAction =
  | { type: "INCREASE" }
  | { type: "DECREASE" }
  | { type: "RESET" };

type AppDispatch = (action: AppAction) => void;

// Initial state
const initialState: AppState = {
  count: 0,
};

// Context for state and dispatch
const AppContext = createContext<
  { state: AppState; dispatch: AppDispatch } | undefined
>(undefined);

// Reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
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
export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
