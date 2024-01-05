import { useState } from 'react';
import { useQuery } from 'react-query';
import moment from 'moment';
import { apiClient } from 'api/apiClient';
import { API_ROUTE_REPORTS } from 'api/reports/apiRoutes';
import { months } from 'utils/data/months';
import { useGetReportsTypes } from '../useGetReportsTypes/useGetReportsTypes';
import { AxiosError, IError } from '../interfaces';
import { IReport, IResponseReports } from './interfaces';
import { IReportsType } from '../useGetReportsTypes/interfaces';

const findMonth = (val: string) => {
  return months.find((el) => el.value === val);
};

export const useGetReportsGenerated = () => {
  const [reportsGenerated, setReportsGenerated] = useState<IReport[]>();
  const [total, setTotal] = useState<number>(1);
  const [errorRes, setErrorRes] = useState<IError>();

  const [reportPage, setReportPage] = useState<string>('1');
  const [sortOrder, setSortOrder] = useState<string>('DESC');
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterYear, setFilterYear] = useState<string | null>(null);
  const [filterMonth, setFilterMonth] = useState<string | null>(null);

  const { reportTypes } = useGetReportsTypes();

  const getReportByKey = (key: IReportsType['key']) =>
    reportTypes && reportTypes.find((report) => report.key === key);

  const url = `${
    API_ROUTE_REPORTS.reportsGenerated
  }?sort_by=dateReport&sort_order=${sortOrder}&page=${reportPage}${
    filterType ? `&filters[type]=${filterType}` : ''
  }${filterYear ? `&filters[year]=${filterYear}` : ''}${
    filterMonth ? `&filters[month]=${filterMonth}` : ''
  }`;

  const { isLoading: isReportsLoading } = useQuery<
    IResponseReports,
    AxiosError
  >({
    queryKey: [
      'reports-generated',
      reportPage,
      sortOrder,
      filterType,
      filterYear,
      filterMonth,
    ],
    queryFn: () => apiClient.get(url),
    keepPreviousData: true,
    onSuccess: (res) => {
      const result = res.data.data.data;

      const resultWithExtractedYearMonth = result.map((report) => {
        return {
          id: report.id,
          name: getReportByKey(report.type)!.name,
          type: report.type,
          year: moment(report.dateReport).year().toString(),
          month: findMonth((moment(report.dateReport).month() + 1).toString())!
            .name,
          created_at: report.created_at,
          updated_at: report.updated_at,
          url: report.url,
          dateReport: report.dateReport,
        };
      });
      setReportsGenerated(resultWithExtractedYearMonth);
      setTotal(res.data.data.total);
    },
    onError: (err: AxiosError) => {
      setErrorRes(err.response.data);
    },
  });

  return {
    isReportsLoading,
    reportsGenerated,
    errorRes,
    total,
    reportPage,
    setReportPage,
    setSortOrder,
    setFilterType,
    setFilterMonth,
    setFilterYear,
    filterType,
    filterMonth,
    filterYear,
  };
};
