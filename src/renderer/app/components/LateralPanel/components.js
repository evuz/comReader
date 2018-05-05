import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  top: 0;
  bottom: 25px;
  left: 0;
  overflow-y: auto;
  width: 125px;
  background: ${({ theme }) => theme.lateralNavColor};
`;
