import * as Yup from 'yup';
import { loginValidationSchema } from '../../Login';

export const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(10).required(),
  lastName: Yup.string().min(3).max(10).required(),
  phone: loginValidationSchema.fields.phone,
});
