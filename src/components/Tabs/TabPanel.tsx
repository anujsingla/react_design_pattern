import classNames from "classnames";
import { ReactNode } from "react";
import { useTabsContext } from "./TabContext";

interface IProps {
  id: string;
  className?: string;
  tabKey: number;
  children: ReactNode;
}

const defaultProps: Partial<IProps> = {
  id: "",
  className: "",
  tabKey: 0,
};

function TabPanel(props: IProps) {
  const { id, className, tabKey, children } = props;
  const { activeTab } = useTabsContext();
  const selectedTab = activeTab === tabKey;
  return (
    <div className="tab-content" id={`${id}-panel`}>
      <div
        className={classNames("tab-pane fade", className, {
          "show active": selectedTab,
        })}
      >
        {children}
      </div>
    </div>
  );
}
TabPanel.defaultProps = defaultProps;
export { TabPanel };
