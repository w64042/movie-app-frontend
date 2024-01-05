export interface IResetPasswordValues {
  password: string;
  passwordConfirmation: string;
}

export const initialResetPasswordValues: IResetPasswordValues = {
  password: '',
  passwordConfirmation: '',
};
