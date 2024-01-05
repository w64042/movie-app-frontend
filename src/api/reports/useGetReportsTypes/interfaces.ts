export interface IReportsType {
  key: string;
  name: string;
  report: string;
  type: string;
  short_name: string;
}

export const initialReportsType: IReportsType = {
  key: '',
  name: '',
  report: '',
  type: '',
  short_name: '',
};

export interface IResponseReportsTypes {
  data: {
    data: {
      data: IReportsType[];
    };
  };
}
