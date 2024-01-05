import { LoginButtonStyled } from './LoginButton.styles';

export interface ILoginButtonProps {
  text: string;
}

export const LoginButton: React.FC<ILoginButtonProps> = (props) => {
  const { text } = props;

  return <LoginButtonStyled type='submit'>{text}</LoginButtonStyled>;
};
