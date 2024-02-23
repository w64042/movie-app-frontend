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

.user-list-wrapper {
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => theme.padding.m};
}

.user-list {
    margin-top: ${({ theme }) => theme.margin.l};
     display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.margin.l};

    @media (max-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px){
        grid-template-columns: 1fr;
    }
}
`;


