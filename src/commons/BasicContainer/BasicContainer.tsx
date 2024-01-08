import styled from 'styled-components';

interface IBasicContainerProps {
  isCentered?: boolean;
}
export const BasicContainer = styled.div<IBasicContainerProps>`
  width: calc(100vw - 28rem);
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'start')};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey};
  box-shadow: rgb(99 99 99 / 20%) 0 2px 8px 0;
  padding: 2rem;
`;
