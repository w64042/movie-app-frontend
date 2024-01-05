import { useState } from 'react';
import { useQuery } from 'react-query';
import { apiClient } from 'api/apiClient';
import { API_ROUTE_REPORTS } from 'api/reports/apiRoutes';
import { AxiosError, IError } from '../interfaces';
import { IResponseReportsTypes } from './interfaces';

export const useGetReportsYearsList = () => {
  const [reportsYearsList, setReportsYearsList] = useState<string[]>();
  const [errorRes, setErrorRes] = useState<IError>();

  const { isLoading: isReportsYearsListLoading } = useQuery<
    IResponseReportsTypes,
    AxiosError
  >(
    'reports-years-list',
    () => apiClient.get(`${API_ROUTE_REPORTS.reportsYearsList}`),
    {
      onSuccess: (res) => {
        const result = {
          // prepare response data for year filter
          data: res.data.data.data.map((resp) => resp.year.toString()),
        };
        setReportsYearsList(result.data);
      },
      onError: (err: AxiosError) => {
        setErrorRes(err.response.data);
      },
    },
  );

  return {
    isReportsYearsListLoading,
    reportsYearsList,
    errorRes,
  };
};
