import { MessageWrapper } from './SuccessMessage.styles';

interface ISuccessMessageProps {
  successMessage: string;
}

export const SuccessMessage: React.FC<ISuccessMessageProps> = ({ successMessage }) => {
  return <MessageWrapper>{successMessage}</MessageWrapper>;
};
