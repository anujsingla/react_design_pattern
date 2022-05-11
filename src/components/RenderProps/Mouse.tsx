import { useState } from "react";

export interface IMouse {
  x: number;
  y: number;
}

interface IProps {
  renderProps: (mousePosition: IMouse) => JSX.Element;
}

export function Mouse(props: IProps) {
  const [mousePosition, setMousePosition] = useState<IMouse>({
    x: 0,
    y: 0,
  });
  return (
    <div
      className="mouse"
      onMouseMove={(event) =>
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        })
      }
    >
      {props.renderProps(mousePosition)}
    </div>
  );
}
