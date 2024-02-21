import styled from 'styled-components';

export const SeriesListStyled = styled.section`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.margin.l};
`;

