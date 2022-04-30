import { useState } from "react";
import { Accordion } from "./Accordion/Accordion";
import { AccordionButton } from "./Accordion/AccordionButton";
import { AccordionItem } from "./Accordion/AccordionItem";
import { AccordionPanel } from "./Accordion/AccordionPanel";

export function AppAccordion() {
  const [activePanel, setActivePanel] = useState(0);
  const onChangeTab = (tab: number) => {
    setActivePanel(tab);
  };
  return (
    <div>
      <Accordion
        onSelectPanel={onChangeTab}
        id="accordion"
        activePanel={activePanel}
      >
        <AccordionItem id="item1">
          <AccordionButton panelKey={0} label="Item 1" />
          <AccordionPanel panelKey={0}>
            <strong>Item 1</strong>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="item2">
          <AccordionButton panelKey={1} label="Item 2" />
          <AccordionPanel panelKey={1}>
            <strong>Item 2</strong>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="item3">
          <AccordionButton panelKey={2} label="Item 3" />
          <AccordionPanel panelKey={2}>
            <strong>Item 2</strong>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
