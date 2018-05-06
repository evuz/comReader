import styled from 'styled-components';

export const Root = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const DoblePage = styled.div`
  display: flex;
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  cursor: -webkit-grab;
  ${({ drag }) => drag && 'cursor: -webkit-grabbing'}};
`;

export const ImageRight = Image.extend`
  height: 100%;
  margin-left: 0;
`;
export const ImageLeft = Image.extend`
  height: 100%;
  margin-right: 0;
`;
