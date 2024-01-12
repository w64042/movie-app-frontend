import styled from 'styled-components';

export const ListsStyled = styled.section`
border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
padding-bottom: ${({ theme }) => theme.padding.l};
button {
  background-color: ${({ theme }) => theme.colors.blue};
  border:none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
}
`;


