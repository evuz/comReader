import React, { Component } from 'react';

import { Root, HoverPage, NumberPage, Image } from './components';

class MiniaturePage extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleClick, page } = this.props;
    handleClick(page);
  }

  render() {
    const { page, src, active } = this.props;
    return (
      <Root
        onClick={this.handleClick}
        role="presentation"
        className={active ? 'active' : ''}
      >
        <HoverPage active={active}>
          <NumberPage>{page + 1}</NumberPage>
        </HoverPage>
        <Image src={src} alt="" />
      </Root>
    );
  }
}

export default MiniaturePage;
