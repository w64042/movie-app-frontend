import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import { FIELD_REQUIRED } from 'utils/yup/messages';
import { IForgotPasswordValues } from './interfaces';

export const GenerateForgotPasswordSchema: SchemaOf<IForgotPasswordValues> =
  Yup.object().shape({
    username: Yup.string().required(FIELD_REQUIRED),
  });
