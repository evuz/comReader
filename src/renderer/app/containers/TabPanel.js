import React, { Component } from 'react';
import { ipcRenderer } from 'electron';
import { connect } from 'react-redux';

import Welcome from '../components/Welcome';
import Reader from './Reader';
import TabPanelComponent from '../components/TabPanel';
import { setTabSelected } from '../reducers/tab';

const tabDefault = { title: 'Blank' };

class TabPanelContainer extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [],
    };

    this.removeTab = this.removeTab.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.newTab = this.newTab.bind(this);
  }

  componentDidMount() {
    ipcRenderer.on('file-extracted', (event, data) => {
      this.changeTab({ title: data.filename, component: <Reader /> }, 0);
    });
    this.newTab({ title: 'Welcome', component: <Welcome /> });
  }

  removeTab(tabIndex) {
    this.setState({ tabs: this.state.tabs.filter((e, i) => i !== tabIndex) });
  }

  changeTab(tab, tabSelected) {
    this.setState({
      tabs: this.state.tabs.map((e, i) => {
        if (i === tabSelected) {
          return tab;
        }
        return e;
      }),
    });
  }

  newTab(tab = tabDefault) {
    this.setState({ tabs: this.state.tabs.concat([tab]) });
  }

  render() {
    return (
      <TabPanelComponent
        tabs={this.state.tabs}
        onClose={this.removeTab}
        onDoubleClickTabList={this.newTab}
        onChangeTab={this.props.onChangeTab}
      />
    );
  }
}

const mapDispatchToProps = {
  onChangeTab: setTabSelected,
};

export default connect(null, mapDispatchToProps)(TabPanelContainer);
