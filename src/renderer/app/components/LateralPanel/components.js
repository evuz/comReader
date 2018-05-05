import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  top: 0;
  bottom: 25px;
  left: 0;
  overflow-y: auto;
  width: 125px;
  background: ${({ theme }) => theme.lateralNavColor};
  ${({ fullScreen }) =>
    fullScreen && `
    z-index: 2;
    top: 0;
    left: -100px;
    transition: 0.3s;
    opacity: 0;
    &:hover {
        opacity: 1;
        left: 0;
        overflow-y: scroll;
    }
  `};
`;
