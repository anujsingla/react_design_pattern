import classNames from "classnames";
import { useTabsContext } from "./TabContext";

interface IProps {
  id: string;
  className?: string;
  tabKey: number;
  disabled?: boolean;
  label: string;
}

const defaultProps: Partial<IProps> = {
  id: "",
  className: "",
  disabled: false,
};

function Tab(props: IProps) {
  const { id, className, label, tabKey } = props;
  const { activeTab, onSelectTab } = useTabsContext();
  const selectedTab = activeTab === tabKey;
  return (
    <li id={`${id}-tab`} className={classNames("nav-item", className)}>
      <button
        onClick={() => onSelectTab(tabKey)}
        className={classNames("nav-link", {
          active: selectedTab,
        })}
        role="tab"
      >
        {label}
      </button>
    </li>
  );
}
Tab.defaultProps = defaultProps;
export { Tab };
