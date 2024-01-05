import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import { FIELD_REQUIRED } from 'utils/yup/messages';
import { IResetPasswordValues } from './interfaces';

export const GenerateResetPasswordSchema: SchemaOf<IResetPasswordValues> =
  Yup.object().shape({
    password: Yup.string().required(FIELD_REQUIRED),
    passwordConfirmation: Yup.string().required(FIELD_REQUIRED),
  });
