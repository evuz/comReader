import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaClose } from 'react-icons/lib/fa';

import './index.scss';

const TaskPanelComponent = ({ onClose, tabs = [], onChangeTab, onDoubleClickTabList }) => {
  const tabsRenderer = tabs.map((tab, index) => (
    <Tab
      className="tab"
      key={index}
      onDoubleClick={e => e.stopPropagation()}
    >
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
      <TabList
        className="tab_list"
        onDoubleClick={onDoubleClickTabList}
      >
        {tabsRenderer}
      </TabList>
      {panelComponentsRenderer}
    </Tabs>
  );
};

export default TaskPanelComponent;
