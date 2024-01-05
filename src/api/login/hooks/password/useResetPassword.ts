import { API_ROUTE_LOGIN } from 'api/login/apiRoutes';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useSearchParams } from 'react-router-dom';

interface IUseResetPassword {
  password: string;
  passwordConfirmation: string;
}
/* eslint no-underscore-dangle: 0 */
export const useResetPassword = () => {
  const [searchParams] = useSearchParams();

  return useMutation(async (data: IUseResetPassword) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_SERVER_URL +
          API_ROUTE_LOGIN.resetPassword,
        {
          password: data.password,
          password_confirmation: data.passwordConfirmation,
          token: searchParams.get('token'),
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
      console.error('reset password error', err);
      return err.response;
    }
  });
};
