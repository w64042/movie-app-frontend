import { API_ROUTE_LOGIN } from 'api/login/apiRoutes';
import axios from 'axios';
import { useMutation } from 'react-query';
/* eslint no-underscore-dangle: 0 */
export const useForgotPassword = () => {
  return useMutation(async (login: string) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_SERVER_URL +
          API_ROUTE_LOGIN.forgotPassword,
        {
          login: login,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const resData = res.status;
      return resData;
    } catch (err: any) {
      console.error('forgot password error', err);
      return err.response;
    }
  });
};
