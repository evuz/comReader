import { connect } from 'react-redux';

import TabPanelComponent from '../components/TabPanel';
import { setTabSelected, removeTab } from '../reducers/tab';

const mapStateToProps = state => ({
  tabs: state.tab.tabs,
});

const mapDispatchToProps = {
  onClose: removeTab,
  onChangeTab: setTabSelected,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabPanelComponent);
