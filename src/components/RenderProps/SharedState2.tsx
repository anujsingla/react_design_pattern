interface IProps {
  value: string;
}

export function SharedState2(props: IProps) {
  return <div>Shared State 2: {props.value}</div>;
}
