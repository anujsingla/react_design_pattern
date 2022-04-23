import { IAction } from "../models/shared";

export interface IUserDetails {
  firstName: string;
  lastName: string;
  address: string;
}
export interface IUserState {
  userDetails: IUserDetails;
}

export const initialUserStateValue = {
  userDetails: {
    firstName: "",
    lastName: "",
    address: "",
  },
};

export enum UserConstant {
  updateUserState = "updateUserState",
}

type IActionType = IAction<UserConstant, IUserState>;
export type UserReducerDispatchType = (value: IActionType) => void;

export const userReducer = (
  state: IUserState,
  action: IActionType
): IUserState => {
  switch (action.type) {
    case UserConstant.updateUserState: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export const updateUserDetails = (
  dispatch: UserReducerDispatchType,
  userDetails: IUserDetails
) => {
  dispatch({
    type: UserConstant.updateUserState,
    payload: { userDetails },
  });
};
