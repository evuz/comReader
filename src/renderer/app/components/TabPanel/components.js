import styled from 'styled-components';

import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

const Root = styled(Tabs)`
  position: relative;
  height: 100%;
  width: 100%;
`;

const TabWrapper = styled(Tab)`
  width: 80px;
  height: 20px;
  padding: 5px 5px;
  color: white;
  background-color: #333333;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &.tab_selected {
    background-color: #1e1e1e;
  }
  &:hover {
    span {
      color: #d6d6d6;
    }
  }
`;

const TabListWrapper = styled(TabList)`
  display: ${({ theme }) => (theme.fullScreen ? 'none' : 'flex')};
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #262626;
`;

const TabPanelWrapper = styled(TabPanel)`
  position: absolute;
  top: ${({ theme }) => (theme.fullScreen ? '0px' : '30px')};
  right: 0;
  left: 0;
  bottom: 0;
  &.tab_panel_selected {
    z-index: 1;
  }
`;

const TabText = styled.span`
  max-width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

Root.tabsRole = 'Tabs';
TabWrapper.tabsRole = 'Tab';
TabPanelWrapper.tabsRole = 'TabPanel';
TabListWrapper.tabsRole = 'TabList';

export { Root, TabWrapper, TabListWrapper, TabPanelWrapper, TabText };
