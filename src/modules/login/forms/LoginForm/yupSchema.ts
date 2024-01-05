import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import { FIELD_REQUIRED } from 'utils/yup/messages';
import { ILoginValues } from './interfaces';

export const GenerateLoginSchema: SchemaOf<ILoginValues> = Yup.object().shape({
  username: Yup.string().required(FIELD_REQUIRED),
  password: Yup.string().required(FIELD_REQUIRED),
});
