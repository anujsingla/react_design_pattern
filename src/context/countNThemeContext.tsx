import { createContext, ReactNode, useContext, useReducer } from "react";
import { countNThemeReducer, initialValue } from "../reducer/countNTheme";

export const CountNThemeStateContext = createContext(initialValue);
export const CountNThemeDispatchContext = createContext<any>(null);

interface IProps {
  children: ReactNode;
}

export const useCountNThemeStateContext = () =>
  useContext(CountNThemeStateContext);
export const useCountNThemeDispatchContext = () =>
  useContext(CountNThemeDispatchContext);

export function CountNThemeProvider({ children }: IProps) {
  const [countNTheme, dispatch] = useReducer(countNThemeReducer, initialValue);
  return (
    <CountNThemeStateContext.Provider value={countNTheme}>
      <CountNThemeDispatchContext.Provider value={dispatch}>
        {children}
      </CountNThemeDispatchContext.Provider>
    </CountNThemeStateContext.Provider>
  );
}
