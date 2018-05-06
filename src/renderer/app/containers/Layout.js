import React from 'react';

import LayoutComponent from '../components/Layout';
import ControlNavContainer from './ControlNav';
import LateralPanelContainer from './LateralPanel';

const LayoutContainer = ({ children }) => (
  <LayoutComponent
    controlNav={<ControlNavContainer />}
    lateralPanel={<LateralPanelContainer />}
  >
    {children}
  </LayoutComponent>
);

export default LayoutContainer;
