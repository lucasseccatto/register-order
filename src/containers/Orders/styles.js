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

export const Client = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  padding: 16px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  height: 90px;

  color: #ffffff;

  .clientName {
    margin-top: 10px;
  }

  .orderItems {
    font-weight: 100;
    width: 200px;
    padding: 2px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
