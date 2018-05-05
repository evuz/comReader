import React from 'react';
import Spinner from 'react-spinkit';

import { Root } from './components';

const Loading = (props) => {
  const { state } = props;
  return state ? (
    <Root>
      <Spinner name="double-bounce" style={styles.spinner} />
    </Root>
  ) : null;
};
const styles = {
  spinner: {
    width: '80px',
    height: '80px',
    color: '#FAF9F9',
  },
};

export default Loading;
