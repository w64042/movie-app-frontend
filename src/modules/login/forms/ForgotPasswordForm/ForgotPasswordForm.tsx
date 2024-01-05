import { Typography } from 'antd';
import { useForgotPassword } from 'api/login/hooks/password/useForgotPassword';
import { ErrMessage, Spinner } from 'commons';
import { CenterElements } from 'commons/CenterElements/CenterElements';
import { Input } from 'commons/Input/Input';
import { FormikProvider, FormikState, useFormik } from 'formik';
import { LoginButton } from 'modules/login/components/LoginButton/LoginButton';
import { useState } from 'react';
import { LoginFormWrapper, LoginTitle } from '../LoginForm/LoginForm.styles';
import {
  IForgotPasswordValues,
  initialForgotPasswordValues,
} from './interfaces';
import { GenerateForgotPasswordSchema } from './yupSchema';

const { Text } = Typography;
export const ForgotPasswordForm = () => {
  const [errMessage, setErrMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [isEmailSend, setIsEmailSend] = useState<boolean>(false);
  const { mutate: forgotPassword, isLoading: isForgotPasswordLoading } =
    useForgotPassword();

  const submitForm = (
    values: IForgotPasswordValues,
    {
      resetForm,
    }: {
      resetForm: (
        nextState?: Partial<FormikState<IForgotPasswordValues>> | undefined,
      ) => void;
    },
  ) => {
    setErrMessage('');
    forgotPassword(values.username, {
      onSuccess: (res) => {
        if (res === 200) {
          setIsEmailSend(true);
        } else {
          setErrMessage(res.data?.error?.message);
        }
      },
      onError: (error) => {
        console.error(error);
      },
    });

    resetForm({ values: initialForgotPasswordValues });
    setUsername('');
  };

  const formik = useFormik({
    initialValues: initialForgotPasswordValues,
    validationSchema: GenerateForgotPasswordSchema,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: submitForm,
  });

  return (
    <CenterElements>
      {isForgotPasswordLoading ? (
        <Spinner />
      ) : (
        <FormikProvider value={formik}>
          {errMessage && <ErrMessage errMessage={errMessage} />}
          {isEmailSend && (
            <Text type='success'>Wysłano mail z linkiem do zmiany hasła</Text>
          )}
          <LoginFormWrapper method='POST' onSubmit={formik.handleSubmit}>
            <LoginTitle>Przypomnij hasło</LoginTitle>
            <Input
              type='text'
              placeholder='Login'
              name='username'
              textAbove='Wprowadź login'
              onChange={(e) => {
                setUsername(e.target.value);
                formik.setFieldValue('username', e.target.value);
              }}
              value={username}
              errMessageInput={formik.errors.username}
            />

            <LoginButton text='Wyślij prośbę' />
          </LoginFormWrapper>
        </FormikProvider>
      )}
    </CenterElements>
  );
};
