import styled from 'styled-components';

export const LoginFormWrapper = styled.form`
  margin: 0 auto;
  width: 330px;
  max-width: 100%;
  margin-top: 10px;
  padding: 15px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 5px;
  margin-bottom: ${({ theme }) => theme.margin.l};
`;

export const LoginTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.margin.m} 0;
  padding: 0;
  text-align: center;
  font-size: 26px;
`;
