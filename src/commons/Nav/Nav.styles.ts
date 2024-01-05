import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavListItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  height: 45px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding-left: 10%;
  display: flex;
  align-items: center;
  margin-top: 20px;

  &:first-child {
    margin-top: 30%;
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.lighter};
    color: ${({ theme }) => theme.colors.white};
  }
`;
