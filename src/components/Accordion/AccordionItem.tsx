import classNames from "classnames";
import { ReactNode } from "react";

interface IProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const defaultProps: Partial<IProps> = {
  id: "",
  className: "",
};

function AccordionItem(props: IProps) {
  const { children, id, className } = props;
  return (
    <div id={id} className={classNames("accordion-item", className)}>
      {children}
    </div>
  );
}
AccordionItem.defaultProps = defaultProps;
export { AccordionItem };
