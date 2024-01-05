export interface IError {
  error: {
    message: string;
    status: number;
    description: string;
  };
}

export interface AxiosError {
  response: {
    data: IError;
  };
  status: number;
  statusText: string;
}
