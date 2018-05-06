import styled, { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  ::-webkit-scrollbar-track {
    opacity: 0;
  }
  ::-webkit-scrollbar {
    width: 10px;
    opacity: 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: hsla(0, 0%, 47%, .4);
  }
`;

export const Root = styled.div`
  font-family: Open Sans;
`;
