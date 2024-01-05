import { API_ROUTE_LOGIN } from 'api/login/apiRoutes';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useMutation } from 'react-query';

interface IUseFirstPassword {
  password: string;
  passwordConfirmation: string;
}
/* eslint no-underscore-dangle: 0 */
export const useFirstPassword = () => {
  const [cookies] = useCookies();

  return useMutation(async (data: IUseFirstPassword) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_SERVER_URL +
          API_ROUTE_LOGIN.firstPassword,
        {
          password: data.password,
          password_confirmation: data.passwordConfirmation,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
              cookies.User?.access_token ? cookies.User.access_token : ''
            }`,
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
