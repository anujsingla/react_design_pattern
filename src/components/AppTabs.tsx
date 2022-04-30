import { map } from "lodash";
import { useState } from "react";
import { Tab } from "./Tabs/Tab";
import { TabList } from "./Tabs/TabList";
import { TabPanel } from "./Tabs/TabPanel";
import { TabOrientation, Tabs } from "./Tabs/Tabs";

export enum AppTabIds {
  HOME = "Home",
  ABOUT = "About",
  CONTACT = "Contact",
}

export const AppTabDetails = [
  {
    id: AppTabIds.HOME,
    label: "Home",
    tabKey: 0,
  },
  {
    id: AppTabIds.ABOUT,
    label: "About",
    tabKey: 1,
  },
  {
    id: AppTabIds.CONTACT,
    label: "Contact",
    tabKey: 2,
  },
];

export function AppTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const onChangeTab = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Tabs
        orientation={TabOrientation.HORIZONTAL}
        id="app-tabs"
        onSelectTab={onChangeTab}
        activeTab={activeTab}
      >
        <TabList id="apptablist">
          {map(AppTabDetails, (t) => (
            <Tab key={t.tabKey} tabKey={t.tabKey} label={t.label} />
          ))}
        </TabList>
        {map(AppTabDetails, (t) => (
          <TabPanel id={`${t.id}-panel`} key={t.tabKey} tabKey={t.tabKey}>
            {t.id === AppTabIds.HOME && <div>Home tab</div>}
            {t.id === AppTabIds.ABOUT && <div>About tab</div>}
            {t.id === AppTabIds.CONTACT && <div>Contact tab</div>}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
