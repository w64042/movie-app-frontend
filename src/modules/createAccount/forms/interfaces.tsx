export interface ICreateAccountValues {
  name?: string;
  email?: string;
  password?: string;

}

export const initialCreateAccountValues: ICreateAccountValues = {
  name: '',
  email: '',
  password: '',
};
