import {
  useCountNThemeDispatchContext,
  useCountNThemeStateContext,
} from "../context/countNThemeContext";
import { decrementCount, incrementCount } from "../reducer/countNTheme";

export function Count() {
  const countState = useCountNThemeStateContext();
  const dispatch = useCountNThemeDispatchContext();
  const increment = () => incrementCount(dispatch);
  const decrement = () => decrementCount(dispatch);
  return (
    <div>
      <div>Count: {countState.count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
