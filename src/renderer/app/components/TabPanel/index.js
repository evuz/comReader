import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaClose } from 'react-icons/lib/fa';

import './index.scss';

// const TabOne = () => (
//   <div>
//     Primer tab
//   </div>
// );

// const TabTwo = () => (
//   <div>
//     Segundo tab
//   </div>
// );

// const tabs = [
//   { title: 'tab1', component: <TabOne /> }, { title: 'tab2', component: <TabTwo /> }
// ];

const TaskPanelComponent = ({ onClose, tabs = [], onChangeTab }) => {
  const tabsRenderer = tabs.map((tab, index) => (
    <Tab className="tab" key={index}>
      <span>{tab.title}</span>
      <FaClose className="close-icon" onClick={() => onClose(index)} />
    </Tab>
  ));
  const panelComponentsRenderer = tabs.map((tab, index) => (
    <TabPanel
      key={index}
      className="tab_panel"
      selectedClassName="tab_panel_selected"
    >
      {tab.component}
    </TabPanel>
  ));
  return (
    <Tabs
      className="tab_panel_component"
      disabledTabClassName="tab_disable"
      selectedTabClassName="tab_selected"
      onSelect={onChangeTab}
    >
      <TabList className="tab_list">
        {tabsRenderer}
      </TabList>
      {panelComponentsRenderer}
    </Tabs>
  );
};

export default TaskPanelComponent;
