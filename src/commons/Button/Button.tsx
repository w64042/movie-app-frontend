import { Button } from 'antd';

type IButtonType = 'primary' | 'ghost' | 'text';
type IHtml = 'button' | 'submit' | 'reset';
type ISize = 'large' | 'middle' | 'small';

export interface IBasicButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: IButtonType;
  loading?: boolean;
  htmlType?: IHtml;
  size?: ISize;
  icon?: React.ReactElement;
}

export const BasicButton: React.FC<IBasicButtonProps> = (props) => {
  const { text } = props;

  return <Button {...props}>{text}</Button>;
};
