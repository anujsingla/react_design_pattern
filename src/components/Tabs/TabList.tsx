import { ReactNode } from "react";
import classNames from "classnames";
import { useTabsContext } from "./TabContext";
import { TabOrientation } from "./Tabs";

interface IProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const defaultProps: Partial<IProps> = {
  id: "",
  className: "",
};

function TabList(props: IProps) {
  const { children, id, className } = props;
  const { orientation } = useTabsContext();
  return (
    <ul
      className={classNames("nav nav-pills mb-3", className, {
        "flex-column": orientation === TabOrientation.VERTICAL,
      })}
      id={`${id}-tablist`}
    >
      {children}
    </ul>
  );
}
TabList.defaultProps = defaultProps;
export { TabList };
