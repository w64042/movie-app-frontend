import styled from 'styled-components';

export const MoviesListStyled = styled.section`
  // margin: 0 0 ${({ theme }) => theme.margin.m} 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.margin.l};

`;

