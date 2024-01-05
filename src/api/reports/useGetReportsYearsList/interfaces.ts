export interface IReportsYearsElement {
  year: number;
}
export type IReportsYearsList = IReportsYearsElement[];

export const initialReportsYearsList: IReportsYearsList = [];

export interface IResponseReportsTypes {
  data: {
    data: {
      data: IReportsYearsElement[];
    };
  };
}
