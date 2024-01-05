import { useState } from 'react';
import moment from 'moment';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { pl } from 'date-fns/locale';
import { Space, Input } from 'antd';
import { ErrMessage } from 'commons';
import 'react-datepicker/dist/react-datepicker.css';
import './custom.css';

type IDatePickerPlaceholder = 'Od' | 'Do';

export interface IDatePickerModuleProps {
  placeholder?: IDatePickerPlaceholder;
  formValue?: Date | null;
  errMessage?: string;
  onChangeHandler: (value: Date | null) => void;
}

registerLocale('pl', pl);

const minDate = new Date('01-01-2020');
const maxDate = new Date();

const formatDate = (date: Date) => moment(date).format('DD-MM-yyyy');

const dataErrorMessage = `Nieprawidłowa data. Wybierz dzień pomiędzy ${formatDate(
  minDate,
)} r. a ${formatDate(maxDate)} r.`;

export const DatePicker: React.FC<IDatePickerModuleProps> = ({
  placeholder,
  onChangeHandler,
  formValue,
  errMessage,
}) => {
  const [isDateValid, setIsDateValid] = useState<boolean>(true);
  const [dateError, setDateError] = useState<string>('');

  const resetDateValidation = () => {
    setIsDateValid(true);
    setDateError('');
  };

  const handleOnBlur = (e: { target: { value: string } }) => {
    const valueParsedToDate = Date.parse(e.target.value);
    if (
      valueParsedToDate < 0 ||
      !moment(valueParsedToDate).isSameOrAfter(minDate) ||
      !moment(valueParsedToDate).isSameOrBefore(maxDate)
    ) {
      setIsDateValid(false);
      setDateError(dataErrorMessage);
    } else {
      resetDateValidation();
    }
  };

  const onSelectHandler = () => {
    resetDateValidation();
  };

  return (
    <Space direction='vertical'>
      <ReactDatePicker
        selected={!isDateValid ? null : formValue}
        onChange={onChangeHandler}
        placeholderText={placeholder}
        dateFormat='dd-MM-y'
        minDate={minDate}
        maxDate={maxDate}
        isClearable
        locale={pl}
        customInput={<Input size='large' style={{ minWidth: '120px' }} />}
        todayButton='Dziś'
        onBlur={(e) => handleOnBlur(e)}
        onSelect={onSelectHandler}
      />
      {errMessage && !dateError && <ErrMessage errMessage={errMessage} />}
      {dateError && <ErrMessage errMessage={dateError} />}
    </Space>
  );
};
