import styled from 'styled-components';

export const Root = styled.div`
  text-align: center;
  color: white;
  padding: 10px;
  padding-bottom: 0;
  position: relative;
`;

export const HoverPage = styled.div`
  opacity: ${({ active }) => (active ? 1 : 0)};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(30, 30, 30, 0.5);
  &:hover {
    opacity: 1;
  }
`;

export const NumberPage = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: #1e1e1e;
  border-radius: 20px;
`;

export const Image = styled.img`
  width: 100%;
`;
