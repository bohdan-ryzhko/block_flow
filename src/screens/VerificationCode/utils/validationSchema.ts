import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  code: Yup.string()
    .matches(/^\d{6}$/, 'Code must be exactly 6 digits')
    .required(),
});
