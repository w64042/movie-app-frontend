import axios from 'axios';
import { Cookies } from 'react-cookie';
import { API_ROUTE_MOVIES_AND_SERIES } from '../apiRoutes';
/* eslint no-underscore-dangle: 0 */
export const getSeries = async () => {
  const cookies = new Cookies();
    try {
      const res = await axios.get(
        process.env.REACT_APP_SERVER_URL + API_ROUTE_MOVIES_AND_SERIES.series,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('User')?.access_token}`
          },
        },
      );
      const resData = res.data;
      return resData;
    } catch (err: any) {
      return err.response;
    }
};
