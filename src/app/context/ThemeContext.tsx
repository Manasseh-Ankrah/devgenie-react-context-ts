import React, { createContext, useContext, useReducer } from "react";
import { providerProps, stateProp, actionProp } from "../types/types";

export const ThemeContext = createContext<
  [stateProp, React.Dispatch<actionProp>] | undefined
>(undefined);

export const ThemeProvider: React.FC<providerProps> = ({
  reducer,
  initialState,
  children,
}) => {
  const value = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useStateValue = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useStateValue must be used within a ThemeProvider");
  }
  return context;
};
