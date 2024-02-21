import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import { FIELD_REQUIRED, INVALID_EMAIL } from 'utils/yup/messages';
import { ICreateAccountValues } from './interfaces';

export const GenerateCreateAccountSchema: SchemaOf<ICreateAccountValues> = Yup.object().shape({
    name: Yup.string().required(FIELD_REQUIRED),
    email: Yup.string().email(INVALID_EMAIL).required(FIELD_REQUIRED),
    password: Yup.string().required(FIELD_REQUIRED),
});
