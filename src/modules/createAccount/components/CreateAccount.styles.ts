import styled from 'styled-components';

export const CreateAccountStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.margin.m};
  }
  button {
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    padding: ${({ theme }) => theme.padding.m};
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: ${({ theme }) => theme.colors.dark};
    }
  }
`;