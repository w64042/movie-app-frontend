import styled from 'styled-components';

export const LoginButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.ml};
  font-weight: ${({ theme }) => theme.fontWeight[400]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.padding.m} ${({ theme }) => theme.padding.l};
  width: 100% !important;
  margin: 0 auto;
  display: block;
  cursor: pointer;
`;
