import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .required()
    .matches(/^\+33 \d{3} \d{3} \d{4}$/, 'Phone number is not valid'),
});
