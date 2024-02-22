import styled from 'styled-components';

export const SeriesListStyled = styled.section`
  padding: 0;
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
`;

