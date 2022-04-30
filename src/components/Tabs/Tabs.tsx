import { ReactNode } from "react";
import { TabsContextProvider } from "./TabContext";

export enum TabOrientation {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

interface IProps {
  id: string;
  className?: string;
  children: ReactNode;
  activeTab: number;
  orientation?: TabOrientation;
  onSelectTab: (tabIndex: number) => void;
}

const defaultProps: Partial<IProps> = {
  id: "",
  className: "",
  orientation: TabOrientation.HORIZONTAL,
};

function Tabs(props: IProps) {
  const { children, id, className, activeTab, orientation, onSelectTab } =
    props;
  return (
    <TabsContextProvider value={{ activeTab, orientation, onSelectTab }}>
      <div id={id} className={className}>
        {children}
      </div>
    </TabsContextProvider>
  );
}
Tabs.defaultProps = defaultProps;
export { Tabs };
