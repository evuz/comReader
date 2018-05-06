import React from 'react';

import { Root, Container } from './components';

const Layout = ({ children, lateralPanel, controlNav }) => (
  <Root>
    {controlNav}
    {lateralPanel}
    <Container>{children}</Container>
  </Root>
);

export default Layout;
