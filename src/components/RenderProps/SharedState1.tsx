interface IProps {
  value: string;
}

export function SharedState1(props: IProps) {
  return <div>Shared State 1: {props.value}</div>;
}
