import { ReactNode } from "react";
import { AccordionContextProvider } from "./AccordionContext";

interface IProps {
  id: string;
  className?: string;
  children: ReactNode;
  activePanel: number;
  onSelectPanel: (panelIndex: number) => void;
}

const defaultProps: Partial<IProps> = {
  id: "",
  className: "",
};

function Accordion(props: IProps) {
  const { children, id, className, activePanel, onSelectPanel } = props;
  return (
    <AccordionContextProvider value={{ activePanel, onSelectPanel }}>
      <div id={id} className={className}>
        {children}
      </div>
    </AccordionContextProvider>
  );
}
Accordion.defaultProps = defaultProps;
export { Accordion };
