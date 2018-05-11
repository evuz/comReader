import React, { Component } from 'react';

import { Root, DoblePage, Image, ImageLeft, ImageRight } from './components';

class Reader extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      cursorY: 0,
      cursorX: 0,
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { reader } = this;
    const prevPage = prevProps.reader.page;
    const newPage = this.props.reader.page;

    if (reader && prevPage !== newPage) {
      reader.scrollTop = 0;
    }
  }

  handleMouseUp() {
    this.setState({
      clicked: false,
    });
  }

  handleMouseDown(e) {
    this.setState({
      clicked: true,
      cursorX: e.pageX,
      cursorY: e.pageY,
    });
  }

  handleMouseMove(e) {
    const { clicked, cursorX, cursorY } = this.state;
    if (clicked) {
      const { reader } = this;
      const { pageX, pageY } = e;
      reader.scrollLeft -= -cursorX + pageX;
      reader.scrollTop -= -cursorY + pageY;
      this.setState({
        cursorX: pageX,
        cursorY: pageY,
      });
    }
  }

  imgSize() {
    const { fullHeight, fullWidth, percentSize } = this.props.options;
    if (fullHeight) {
      return {
        height: `${percentSize}%`,
        width: 'auto',
      };
    } else if (fullWidth) {
      return {
        height: 'auto',
        width: `${percentSize}%`,
      };
    }
  }

  render() {
    const { files, directory, page } = this.props.reader;
    const { twoColumns, percentSize } = this.props.options;
    const { clicked } = this.state;
    const { height, width } = twoColumns
      ? { height: `${percentSize}%` }
      : this.imgSize();

    return files.length ? (
      <Root
        innerRef={(c) => {
          this.reader = c;
        }}
      >
        {twoColumns ? (
          <DoblePage
            style={{
              height,
            }}
          >
            <ImageLeft
              drag={clicked}
              src={directory + files[page]}
              alt=""
              draggable="false"
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
              onMouseMove={this.handleMouseMove}
            />
            <ImageRight
              drag={clicked}
              src={directory + files[page + 1]}
              alt=""
              draggable="false"
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
              onMouseMove={this.handleMouseMove}
            />
          </DoblePage>
        ) : (
          <Image
            drag={clicked}
            src={directory + files[page]}
            alt=""
            style={{
              height,
              width,
            }}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onMouseMove={this.handleMouseMove}
            draggable="false"
          />
        )}
      </Root>
    ) : null;
  }
}

export default Reader;
