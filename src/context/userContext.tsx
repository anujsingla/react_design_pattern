import { createContext, ReactNode, useContext, useReducer } from "react";
import { initialUserStateValue, userReducer } from "../reducer/userReducer";

export const UserStateContext = createContext(initialUserStateValue);
export const UserDispatchContext = createContext<any>(null);

interface IProps {
  children: ReactNode;
}

export const useUserStateContext = () => useContext(UserStateContext);
export const useUserDispatchContext = () => useContext(UserDispatchContext);

export function UserProvider({ children }: IProps) {
  const [userDetails, dispatch] = useReducer(
    userReducer,
    initialUserStateValue
  );
  return (
    <UserStateContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}
