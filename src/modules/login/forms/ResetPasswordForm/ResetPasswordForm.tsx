import { Typography } from 'antd';
import { useResetPassword } from 'api/login/hooks/password/useResetPassword';
import { ErrMessage, Spinner } from 'commons';
import { CenterElements } from 'commons/CenterElements/CenterElements';
import { Input } from 'commons/Input/Input';
import { FormikProvider, FormikState, useFormik } from 'formik';
import { LoginButton } from 'modules/login/components/LoginButton/LoginButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/paths';
import { LoginFormWrapper, LoginTitle } from '../LoginForm/LoginForm.styles';
import { IResetPasswordValues, initialResetPasswordValues } from './interfaces';
import { GenerateResetPasswordSchema } from './yupSchema';

const { Text } = Typography;
export const ResetPasswordForm = () => {
  const [errMessage, setErrMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [isChange, setChange] = useState<boolean>(false);
  const { mutate: resetPassword, isLoading: isResetPasswordLoading } =
    useResetPassword();

  const submitForm = (
    values: IResetPasswordValues,
    {
      resetForm,
    }: {
      resetForm: (
        nextState?: Partial<FormikState<IResetPasswordValues>> | undefined,
      ) => void;
    },
  ) => {
    setErrMessage('');
    resetPassword(
      {
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
      },
      {
        onSuccess: (res) => {
          if (res === 200) {
            setChange(true);
          } else if (res.data.errors) {
            setErrMessage(
              `${res.data.errors?.password?.join(' ') || ''} ${
                res.data.errors?.token?.join(' ') || ''
              }`,
            );
          } else {
            setErrMessage(
              `${errMessage || ''} ${res.data?.message || ''} ${
                res.data.error?.message || ''
              }`,
            );
          }
        },
        onError: (error) => {
          console.error(error);
        },
      },
    );

    resetForm({ values: initialResetPasswordValues });
    setPassword('');
    setPasswordConfirmation('');
  };

  const formik = useFormik({
    initialValues: initialResetPasswordValues,
    validationSchema: GenerateResetPasswordSchema,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: submitForm,
  });

  return (
    <CenterElements>
      {isResetPasswordLoading ? (
        <Spinner />
      ) : (
        <FormikProvider value={formik}>
          {errMessage && <ErrMessage errMessage={errMessage} />}
          {isChange && (
            <Text type='success'>
              Hasło zostało zmienione. Przejdź do
              <Link to={`${ROUTES.LOGIN}`}> strony logowania.</Link>
            </Text>
          )}
          <LoginFormWrapper method='POST' onSubmit={formik.handleSubmit}>
            <LoginTitle>Reset hasła</LoginTitle>
            <Input
              type='password'
              placeholder='Hasło'
              name='password'
              textAbove='nowe hasło'
              onChange={(e) => {
                setPassword(e.target.value);
                formik.setFieldValue('password', e.target.value);
              }}
              value={password}
              errMessageInput={formik.errors.password}
            />
            <Input
              type='password'
              placeholder='Powtórz hasło'
              name='passwordConfirmation'
              textAbove='powtórz nowe hasło'
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
                formik.setFieldValue('passwordConfirmation', e.target.value);
              }}
              value={passwordConfirmation}
              errMessageInput={formik.errors.passwordConfirmation}
            />

            <LoginButton text='Zmień hasło' />
          </LoginFormWrapper>
        </FormikProvider>
      )}
    </CenterElements>
  );
};
