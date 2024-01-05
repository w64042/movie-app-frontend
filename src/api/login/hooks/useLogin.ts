import axios from 'axios';
import { useMutation } from 'react-query';

import { API_ROUTE_LOGIN } from '../apiRoutes';
/* eslint no-underscore-dangle: 0 */
export const useLogin = () => {
  return useMutation(async (data: any) => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_SERVER_URL + API_ROUTE_LOGIN.login,
        {
          username: data.username,
          password: data.password,
          grant_type: process.env.REACT_APP_GRANT_TYPE,
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        },
      );
      const resData = res.data;
      return resData;
    } catch (err: any) {
      console.error('login error', err);
      return err.response;
    }
  });
};
