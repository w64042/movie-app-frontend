import { TopBar } from 'commons';
import { LoginWrapper } from 'modules/login/components/LoginLayout/LoginLayout.styles';
import { LoginForm } from 'modules/login/forms/LoginForm/LoginForm';

const LoginLayoutView = () => {
  return (
    <>
      <TopBar />
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </>
  );
};

export default LoginLayoutView;
