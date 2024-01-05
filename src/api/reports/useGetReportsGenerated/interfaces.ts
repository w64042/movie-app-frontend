export interface IReport {
  id: string;
  url: string;
  name: string;
  type: string;
  dateReport: string;
  year: string;
  month: string;
  created_at: string;
  updated_at: string;
}

export const initialReport: IReport = {
  id: '',
  url: '',
  name: '',
  type: '',
  dateReport: '',
  year: '',
  month: '',
  created_at: '',
  updated_at: '',
};

export interface IResponseLinks {
  url: string;
  label: string;
  active: boolean;
}

export interface IResponseReports {
  data: {
    data: {
      current_page: number;
      data: IReport[];
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      links: IResponseLinks[];
      next_page_url: string;
      path: string;
      per_page: number;
      prev_page_url: null | string;
      to: number;
      total: number;
    };
  };
}
