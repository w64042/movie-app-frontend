import styled from 'styled-components';

interface ICenterElementsProps {
  isRow?: boolean;
}

export const CenterElements = styled.div<ICenterElementsProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ isRow }) => (isRow ? 'row' : 'column')};
`;
