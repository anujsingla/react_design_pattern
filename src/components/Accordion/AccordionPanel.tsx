import classNames from "classnames";
import { ReactNode } from "react";
import { useAccordionContext } from "./AccordionContext";

interface IProps {
  id: string;
  className?: string;
  children: ReactNode;
  panelKey: number;
}

const defaultProps: Partial<IProps> = {
  id: "",
  className: "",
};

function AccordionPanel(props: IProps) {
  const { id, className, children, panelKey } = props;
  const { activePanel } = useAccordionContext();
  const selectedPanel = activePanel === panelKey;
  return (
    <div
      id={id}
      className={classNames("accordion-collapse collapse", className, {
        show: selectedPanel,
      })}
    >
      <div className="accordion-body">{children}</div>
    </div>
  );
}
AccordionPanel.defaultProps = defaultProps;
export { AccordionPanel };
