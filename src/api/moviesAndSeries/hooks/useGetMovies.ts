import axios from 'axios';
import { useMutation } from 'react-query';
import { API_ROUTE_MOVIES_AND_SERIES } from '../apiRoutes';
/* eslint no-underscore-dangle: 0 */
export const useGetMovies = () => {
  return useMutation(async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_SERVER_URL + API_ROUTE_MOVIES_AND_SERIES.movies,
        {},
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
