import classNames from "classnames";
import { useAccordionContext } from "./AccordionContext";

interface IProps {
  id: string;
  className?: string;
  label: string;
  panelKey: number;
}

const defaultProps: Partial<IProps> = {
  id: "",
  className: "",
};

function AccordionButton(props: IProps) {
  const { id, className, label, panelKey } = props;
  const { onSelectPanel } = useAccordionContext();
  return (
    <h2 className={classNames("accordion-header", className)} id={id}>
      <button
        className="accordion-button"
        type="button"
        onClick={() => onSelectPanel(panelKey)}
        // data-bs-toggle="collapse"
        // data-bs-target="#collapseOne"
        // aria-expanded="true"
        // aria-controls="collapseOne"
      >
        {label}
      </button>
    </h2>
  );
}
AccordionButton.defaultProps = defaultProps;
export { AccordionButton };
