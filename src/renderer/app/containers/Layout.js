import React from 'react';
import { connect } from 'react-redux';

import LayoutComponent from '../components/Layout';
import ControlNavContainer from './ControlNav';
import LateralPanelContainer from './LateralPanel';

const LayoutContainer = ({ children, fullScreen }) => (
  <LayoutComponent
    controlNav={<ControlNavContainer />}
    lateralPanel={<LateralPanelContainer />}
    fullScreen={fullScreen}
  >
    {children}
  </LayoutComponent>
);

const mapStateToProps = state => ({
  fullScreen: state.windowState.fullScreen,
});

export default connect(mapStateToProps)(LayoutContainer);
