import styled from 'styled-components';

export const SideBarWrapper = styled.aside`
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-top-right-radius: 12px;
  min-height: calc(100vh - 10.5rem);
  background-color: ${({ theme }) => theme.colors.dark};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-left: none;
`;
