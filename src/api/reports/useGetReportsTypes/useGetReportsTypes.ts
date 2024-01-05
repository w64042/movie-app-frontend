import { useState } from 'react';
import { useQuery } from 'react-query';
import { apiClient } from 'api/apiClient';
import { API_ROUTE_REPORTS } from 'api/reports/apiRoutes';
import { AxiosError, IError } from '../interfaces';
import { IReportsType, IResponseReportsTypes } from './interfaces';

export const useGetReportsTypes = () => {
  const [reportTypes, setReportTypes] = useState<IReportsType[]>();
  const [errorRes, setErrorRes] = useState<IError>();

  const { isLoading: isReportsTypesLoading } = useQuery<
    IResponseReportsTypes,
    AxiosError
  >('reports-types', () => apiClient.get(`${API_ROUTE_REPORTS.reportsTypes}`), {
    onSuccess: (res) => {
      const result = {
        data: res.data,
      };
      setReportTypes(result.data.data.data);
    },
    onError: (err: AxiosError) => {
      setErrorRes(err.response.data);
    },
  });

  return {
    isReportsTypesLoading,
    reportTypes,
    errorRes,
  };
};
