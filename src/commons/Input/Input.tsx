import { ErrMessage } from 'commons/ErrMessage/ErrMessage';
import { InputStyled, InputTextAbove } from './Input.styles';

export interface IInputProps {
  placeholder?: string;
  type: 'text' | 'email' | 'password' | 'number';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  textAbove?: string;
  name?: string;
  errMessageInput?: string;
}

export const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const {
    placeholder,
    type,
    onChange,
    value,
    textAbove,
    name,
    errMessageInput,
  } = props;

  return (
    <>
      {textAbove && <InputTextAbove>{textAbove}</InputTextAbove>}
      <InputStyled
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
      />
      {errMessageInput && <ErrMessage errMessage={errMessageInput} />}
    </>
  );
};
