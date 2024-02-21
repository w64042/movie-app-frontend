import { createHashRouter, Navigate } from 'react-router-dom';
import {
  ROUTES_DASHBOARD,
  ROUTES,
} from 'router/paths';
import TestView from 'modules/test/views/TestView';
import LoginLayoutView from 'modules/login/views/LoginLayout/LoginLayoutView';
import { ProtectedRoute } from 'commons/Secure/ProtectedRoute';
import ForgotPasswordView from 'modules/login/views/ForgotPasswordView/ForgotPasswordView';
import ResetPasswordView from 'modules/login/views/ResetPasswordView/ResetPasswordView';
import CreateAccountView from 'modules/createAccount/CreateAccountView';
import MovieListView from 'modules/moviesAndSeries/views/moviesAndSeries/MovieListView';
import SeriesListView from 'modules/moviesAndSeries/views/moviesAndSeries/SeriesListView';

export const routes = createHashRouter([
  {
    path: `${ROUTES.LOGIN}`,
    element: <LoginLayoutView />,
  },
  {
    path: '/',
    element: (
      <Navigate
        to={{
          pathname: `${ROUTES.LOGIN}`,
        }}
      />
    ),
  },
  {
    path: `${ROUTES.DASHBOARD}`,
    element: <ProtectedRoute path={ROUTES_DASHBOARD.MY_ACCOUNT} />,
  },
  {
    path: `${ROUTES.MOVIES}`,
    element: <ProtectedRoute path={<MovieListView />} />,
  },
  {
    path: `${ROUTES.SERIES}`,
    element: <ProtectedRoute path={<SeriesListView />} />,
  },
  {
    path: `${ROUTES_DASHBOARD.MY_ACCOUNT}`,
    element: <ProtectedRoute path={<TestView />} />,
  },
  {
    path: `${ROUTES.FORGOT_PASSWORD}`,
    element: <ForgotPasswordView />,
  },
  {
    path: `${ROUTES.RESET_PASSWORD}`,
    element: <ResetPasswordView />,
  },
  {
    path: `${ROUTES.CREATE_ACCOUNT}`,
    element: <CreateAccountView />,
  },
  {
    path: '*',
    element: <Navigate to={`${ROUTES.LOGIN}`} />,
  },
]);
