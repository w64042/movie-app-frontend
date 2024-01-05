import axios from 'axios';
import { useMutation } from 'react-query';

import { Cookies } from 'react-cookie';
import { API_ROUTE_LOGIN } from '../apiRoutes';

export const useLogout = () => {
  const cookies = new Cookies();
  /* eslint no-underscore-dangle: 0 */
  return useMutation(async (data: any) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_SERVER_URL + API_ROUTE_LOGIN.logout,
        data,
        {
          headers: {
            Authorization: `Bearer ${cookies.get('User')?.access_token}`,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        },
      );
      const resData = res;
      return resData;
    } catch (err: any) {
      console.error('logout error', err);
      return err.response;
    }
  });
};
