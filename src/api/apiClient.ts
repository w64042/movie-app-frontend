import axios from 'axios';
/* eslint no-underscore-dangle: 0 */
export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const apiServer = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
