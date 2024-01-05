import { Navigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { Spinner } from 'commons/Spinner/Spinner';
import { ROUTES } from 'router/paths';
import { SpinnerProtectedWrapper } from './ProtectedRoute.styles';

interface IProtectedRouteProps {
  path: string | JSX.Element;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = (props) => {
  const { path } = props;
  const [cookies, setCookie, removeCookie] = useCookies();

    if (!cookies?.User?.access_token) {
      return <Navigate to={ROUTES.LOGIN} />;
    }
    
  return typeof path === 'string' ? <Navigate to={path} /> : path;
};
