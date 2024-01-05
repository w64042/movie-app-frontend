import { MessageWrapper } from './ErrMessage.styles';

interface IErrMessageProps {
  errMessage: string;
}

export const ErrMessage: React.FC<IErrMessageProps> = ({ errMessage }) => {
  return <MessageWrapper>{errMessage}</MessageWrapper>;
};
