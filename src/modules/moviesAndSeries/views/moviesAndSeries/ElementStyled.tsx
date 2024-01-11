import styled from 'styled-components';

export const ElementStyled = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  padding: ${({ theme }) => theme.padding.m};
  transition: box-shadow 0.3s ease-in-out;

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  h2 {
    margin-top: ${({ theme }) => theme.margin.m};
  }

  &:hover {
    box-shadow: 0 0 20px 0 ${({ theme }) => theme.colors.dark};
  }
`;
