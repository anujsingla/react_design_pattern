import { IAction } from "../models/shared";

export enum ThemeValue {
  light = "light",
  dark = "dark",
}
export interface ICountNThemeState {
  count: number;
  theme: ThemeValue;
}

export const initialValue = {
  count: 0,
  theme: ThemeValue.light,
};

export enum CountNThemeConstant {
  incrementCount = "incrementCount",
  decrementCount = "decrementCount",
  updateTheme = "updateTheme",
}

type IActionType = IAction<CountNThemeConstant, ICountNThemeState>;
export type CountNThemeReducerDispatchType = (value: IActionType) => void;

export const countNThemeReducer = (
  state: ICountNThemeState,
  action: IActionType
): ICountNThemeState => {
  switch (action.type) {
    case CountNThemeConstant.incrementCount: {
      return { ...state, count: state.count + 1 };
    }
    case CountNThemeConstant.decrementCount: {
      return { ...state, count: state.count - 1 };
    }
    case CountNThemeConstant.updateTheme: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export const updateTheme = (
  dispatch: CountNThemeReducerDispatchType,
  theme: ThemeValue
) => {
  dispatch({
    type: CountNThemeConstant.updateTheme,
    payload: { theme },
  });
};

export const incrementCount = (dispatch: CountNThemeReducerDispatchType) => {
  dispatch({
    type: CountNThemeConstant.incrementCount,
  });
};

export const decrementCount = (dispatch: CountNThemeReducerDispatchType) => {
  dispatch({
    type: CountNThemeConstant.decrementCount,
  });
};
