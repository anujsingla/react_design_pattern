import { useState } from "react";

interface IProps {
  renderProps: (text: string) => JSX.Element;
}

export function ChildComponent(props: IProps) {
  const [value, setValue] = useState("");
  return (
    <div>
      Child Component
      <div>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        {props.renderProps(value)}
      </div>
    </div>
  );
}
