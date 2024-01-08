import styled from 'styled-components';

export const InputStyled = styled.input`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.padding.m};
  font-size: ${({ theme }) => theme.fontSize.m};
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.margin.m};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
`;
export const InputTextAbove = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.margin.s};
`;
