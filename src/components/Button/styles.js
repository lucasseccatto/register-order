import styled from 'styled-components';

export const Button = styled.button`
  height: 58px;
  width: 342px;

  background: ${(rest) =>
    rest.isBack ? 'rgba(255, 255, 255, 0.14)' : 'rgba(217, 56, 86, 1)'};
  border: none;
  cursor: pointer;

  color: #ffffff;

  font-size: 17px;
  font-weight: 700;

  margin-top: 40px;
  margin-bottom: 50px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
