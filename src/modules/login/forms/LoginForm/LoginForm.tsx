import { useEffect, useState } from 'react';
import { Input } from 'commons/Input/Input';
import { LoginButton } from 'modules/login/components/LoginButton/LoginButton';
import { FormikProvider, FormikState, useFormik } from 'formik';
import { useLogin } from 'api/login/hooks/useLogin';
import { ErrMessage, Spinner } from 'commons';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from 'router/paths';
import { CenterElements } from 'commons/CenterElements/CenterElements';
import { LoginFormWrapper, LoginTitle } from './LoginForm.styles';
import { ILoginValues, initialLoginValues } from './interfaces';
import { GenerateLoginSchema } from './yupSchema';

export const LoginForm = () => {
  const [errMessage, setErrMessage] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cookies, setCookie] = useCookies();
  const { mutate: login, isLoading: isLoginLoading } = useLogin();
  const navigate = useNavigate();

  const submitForm = (
    values: ILoginValues,
    {
      resetForm,
    }: {
      resetForm: (
        nextState?: Partial<FormikState<ILoginValues>> | undefined,
      ) => void;
    },
  ) => {
    login(values, {
      onSuccess: (res) => {
        if (res.data?.error) {
          setErrMessage(res.data.message);
        } else {
          setErrMessage('');
          setCookie('User', res, { path: '/', maxAge: 3600 });
          navigate('/dashboard');
        }
      },
      onError: (error) => {
        console.error(error);
      },
    });

    resetForm({ values: initialLoginValues });
    setUsername('');
    setPassword('');
  };

  const formik = useFormik({
    initialValues: initialLoginValues,
    validationSchema: GenerateLoginSchema,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    onSubmit: submitForm,
  });
  useEffect(() => {
    if (cookies.User?.access_token) {
      navigate('/dashboard');
    } else {
      // eslint-disable-next-line no-lonely-if
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isLoginLoading ||
      isLoginLoading
     ? (
        <Spinner />
      ) : (
        <CenterElements>
          <FormikProvider value={formik}>
            {errMessage && <ErrMessage errMessage={errMessage} />}
            <LoginFormWrapper method='POST' onSubmit={formik.handleSubmit}>
              <LoginTitle>Dobrze Cię widzieć! 👋</LoginTitle>
              <Input
                type='text'
                placeholder='Twój login'
                name='username'
                onChange={(e) => {
                  setUsername(e.target.value);
                  formik.setFieldValue('username', e.target.value);
                }}
                value={username}
                errMessageInput={formik.errors.username}
              />
              <Input
                type='password'
                placeholder='Twoje hasło'
                name='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                  formik.setFieldValue('password', e.target.value);
                }}
                value={password}
                errMessageInput={formik.errors.password}
              />
              <LoginButton text='Zaloguj' />
            </LoginFormWrapper>
          </FormikProvider>
          <Link to={`${ROUTES.CREATE_ACCOUNT}`}>Dołącz do Stream Generation</Link>
          <Link to={`${ROUTES.FORGOT_PASSWORD}`}>Zapomniałem hasła</Link>
        </CenterElements>
      )}
    </>
  );
};
