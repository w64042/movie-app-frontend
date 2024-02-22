import axios from 'axios';
import { useMutation } from 'react-query';

import { Cookies } from 'react-cookie';
import { API_ROUTE_LISTS } from '../apiRoutes';
/* eslint no-underscore-dangle: 0 */
export const useGetLists = async () => {
    const cookies = new Cookies();
        try {
            const res = await axios.get(
                process.env.REACT_APP_SERVER_URL + API_ROUTE_LISTS.lists,
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
            console.error('create list error', err);
            return err.response;
        }
};