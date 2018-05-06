import React from 'react';
import {
  MdOpenInBrowser,
  MdKeyboard,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdStayCurrentPortrait,
  MdStayCurrentLandscape,
  MdLooksTwo,
  MdLooksOne,
  MdZoomIn,
  MdZoomOut,
} from 'react-icons/lib/md';

import {
  Root,
  IconsWrapper,
  Row,
  Icon,
  IconLeft,
  IconRight,
} from './components';

const HeaderNav = props => (
  <Root>
    <IconsWrapper>
      <Row>
        <IconLeft>
          <MdOpenInBrowser onClick={props.onClickOpenFile} />
        </IconLeft>
        <IconLeft>
          <MdKeyboard onClick={props.onClickShortcutInfo} />
        </IconLeft>
      </Row>
      <Row>
        <Icon>
          <MdKeyboardArrowLeft onClick={props.onClickPreviousPage} />
        </Icon>
        <Icon>
          <MdKeyboardArrowRight onClick={props.onClickNextPage} />
        </Icon>
      </Row>
      <Row>
        <IconRight>
          <MdZoomOut onClick={props.onClickZoomOut} />
        </IconRight>
        <IconRight>
          <MdZoomIn onClick={props.onClickZoomIn} />
        </IconRight>
        <IconRight>
          <MdStayCurrentLandscape onClick={props.onClickFullWidth} />
        </IconRight>
        <IconRight>
          <MdStayCurrentPortrait onClick={props.onClickFullHeight} />
        </IconRight>
        {props.twoColumns ? (
          <IconRight>
            <MdLooksOne onClick={props.onClickChangeColumns} />
          </IconRight>
        ) : (
          <IconRight>
            <MdLooksTwo onClick={props.onClickChangeColumns} />
          </IconRight>
        )}
      </Row>
    </IconsWrapper>
  </Root>
);

export default HeaderNav;
