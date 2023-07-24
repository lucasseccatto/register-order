import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const Label = styled.p`
  letter-spacing: -0.408px;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;

  margin-left: 25px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;
  padding: 25px;
  margin-bottom: 34px;

  font-size: 18px;
  border: none;
  outline: none;

  color: #ffffff;

  &::placeholder {
    font-weight: 100;

    color: #ffffff;
  }
`;
