import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 25px;
  background: #dd403a;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  color: white;
  padding: 0 10px;
  font-size: 15px;
`;

export const Row = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  cursor: pointer;
  &:hover {
    color: silver;
  }
`;

export const IconLeft = Icon.extend`
  margin-right: 5px;
`;

export const IconRight = Icon.extend`
  margin-left: 5px;
`;
