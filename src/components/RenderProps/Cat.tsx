import { IMouse } from "./Mouse";
import catImage from "./cat.jpeg";

interface IProps {
  mousePosition: IMouse;
}

export function Cat(props: IProps) {
  return (
    <div>
      Cat Mouse Position:
      <div>X: {props.mousePosition.x}</div>
      <div>Y: {props.mousePosition.y}</div>
      <img
        src={catImage}
        alt="cat"
        height="100px"
        style={{
          position: "absolute",
          left: props.mousePosition.x,
          top: props.mousePosition.y,
        }}
      />
    </div>
  );
}
