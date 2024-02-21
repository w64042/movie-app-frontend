import { TopBar } from 'commons';
import { LoginWrapper } from 'modules/login/components/LoginLayout/LoginLayout.styles';
import CreateAccount from './forms/CreateAccountForm';

const LoginLayoutView = () => {
  return (
    <>
      <TopBar />
      <LoginWrapper>
        <CreateAccount />
      </LoginWrapper>
    </>
  );
};

export default LoginLayoutView;
