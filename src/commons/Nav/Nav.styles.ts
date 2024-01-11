import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavListItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  height: 45px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding-left: 10%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  line-height: 1;
  transition: 0.3s ease-in-out;

  &:first-child {
    margin-top: 30%;
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
   