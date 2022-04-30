import { createContext, useContext } from "react";
import { TabOrientation } from "./Tabs";

export interface TabContextProps {
  activeTab: number;
  orientation?: TabOrientation;
  onSelectTab: (tabIndex: number) => void;
}

const TabsContext = createContext<TabContextProps>({
  orientation: TabOrientation.HORIZONTAL,
  activeTab: 0,
  onSelectTab: () => undefined,
});

export const TabsContextProvider = TabsContext.Provider;

export function useTabsContext(): TabContextProps {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabsContext must be must under TabsContextProvider");
  }
  return context;
}
