import {
  useCountNThemeDispatchContext,
  useCountNThemeStateContext,
} from "../context/countNThemeContext";
import { ThemeValue, updateTheme } from "../reducer/countNTheme";

export function Theme() {
  const themeState = useCountNThemeStateContext();
  const dispatch = useCountNThemeDispatchContext();
  const light = () => updateTheme(dispatch, ThemeValue.light);
  const dark = () => updateTheme(dispatch, ThemeValue.dark);
  return (
    <div>
      <div>Theme: {themeState.theme}</div>
      <button onClick={light}>Light</button>
      <button onClick={dark}>Dark</button>
    </div>
  );
}
