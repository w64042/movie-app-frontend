import { useLocation } from 'react-router-dom';
import { ROUTES } from 'router/paths';
import { Logo, Logout } from 'commons';
import { TopWrapper } from './TopBar.styles';

export const TopBar = () => {
  const location = useLocation();
  return (
    <TopWrapper>
      <Logo />
      {location.pathname !== ROUTES.LOGIN &&
      location.pathname !== ROUTES.FORGOT_PASSWORD &&
      location.pathname !== ROUTES.RESET_PASSWORD
       ? (
        <Logout />
      ) : null}
    </TopWrapper>
  );
};
