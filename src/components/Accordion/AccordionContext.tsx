import { createContext, useContext } from "react";

export interface AccordionContextProps {
  activePanel: number;
  onSelectPanel: (panelIndex: number) => void;
}

const AccordionContext = createContext<AccordionContextProps>({
  activePanel: 0,
  onSelectPanel: () => undefined,
});

export const AccordionContextProvider = AccordionContext.Provider;

export function useAccordionContext(): AccordionContextProps {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error("useTabsContext must be must under TabsContextProvider");
  }
  return context;
}
