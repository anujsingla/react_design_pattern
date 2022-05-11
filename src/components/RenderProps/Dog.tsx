import { IMouse } from "./Mouse";
import dogImage from "./dog.jpeg";

interface IProps {
  mousePosition: IMouse;
}

export function Dog(props: IProps) {
  return (
    <div>
      Dog Mouse Position:
      <div>X: {props.mousePosition.x}</div>
      <div>Y: {props.mousePosition.y}</div>
      <img
        src={dogImage}
        alt="dog"
        style={{
          position: "absolute",
          left: props.mousePosition.x + 50,
          top: props.mousePosition.y + 50,
        }}
      />
    </div>
  );
}
