import styled from 'styled-components';

export const Root = styled.div``;

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 25px;
  left: 125px;
  background: rgb(30, 30, 30);
  ${({ theme: { fullScreen } }) =>
    fullScreen && `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `};
`;
