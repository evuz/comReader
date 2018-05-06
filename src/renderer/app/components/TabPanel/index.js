import React from 'react';
import { FaClose } from 'react-icons/lib/fa';

import {
  Root,
  TabListWrapper,
  TabWrapper,
  TabPanelWrapper,
  TabText,
} from './components';

const TabPanelComponent = ({
  onClose,
  tabs = [],
  onChangeTab,
  onDoubleClickTabList,
}) => {
  const tabsRenderer = tabs.map((tab, index) => (
    <TabWrapper key={index} onDoubleClick={e => e.stopPropagation()}>
      <TabText>{tab.title}</TabText>
      <FaClose className="close-icon" onClick={() => onClose(index)} />
    </TabWrapper>
  ));
  const panelComponentsRenderer = tabs.map((tab, index) => (
    <TabPanelWrapper
      key={index}
      className="tab_panel"
      selectedClassName="tab_panel_selected"
    >
      {tab.component}
    </TabPanelWrapper>
  ));
  return (
    <Root
      disabledTabClassName="tab_disable"
      selectedTabClassName="tab_selected"
      onSelect={onChangeTab}
    >
      <TabListWrapper onDoubleClick={() => onDoubleClickTabList()}>
        {tabsRenderer}
      </TabListWrapper>
      {panelComponentsRenderer}
    </Root>
  );
};

export default TabPanelComponent;
