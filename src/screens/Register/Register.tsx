import { FC } from 'react';
import { Text, View } from 'react-native';
import {
  AuthLayout,
  BlockFlowButton,
  HelperText,
  TextField,
} from '../../components';
import { FormikHelpers, useFormik } from 'formik';
import { phoneMask, routes } from '../../consts';
import { IRegistration, RootStackParamList } from '../../interfaces';
import { styles } from './styles';
import {
  useAlert,
  useAppDispatch,
  useNavigate,
  useReduxStore,
} from '../../hooks';
import { login, setRegistrationData } from '../../redux';
import { validationSchema } from './utils';
import { getDisabled } from '../../utils';
import { unwrapResult } from '@reduxjs/toolkit';
import { RouteProp } from '@react-navigation/native';

const initialValues: IRegistration = {
  name: '',
  lastName: '',
  phone: '',
};

type props = {
  route: RouteProp<RootStackParamList, 'register'>;
};

export const Register: FC<props> = ({ route }) => {
  const { auth } = useReduxStore();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const alert = useAlert();

  const onSubmit = async (
    values: IRegistration,
    formikHelpers: FormikHelpers<IRegistration>,
  ) => {
    const user = await dispatch(login({ phone: values.phone })).then(
      unwrapResult,
    );

    if (user) {
      alert({
        title: `The user with the number ${user.phone} already exists`,
        buttons: [
          {
            text: 'Login',
            onPress: () =>
              navigation.navigate(routes.login, { existingPhone: user.phone }),
          },
          { text: 'Cancel', style: 'destructive' },
        ],
      });

      return;
    }

    dispatch(setRegistrationData(values));
    navigation.navigate(routes.verifyCode);
    formikHelpers.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      phone: route.params?.phone || '',
    },
    onSubmit,
    validationSchema,
  });

  const disabled = getDisabled(formik);

  return (
    <AuthLayout subtitle={'Please enter your details.'}>
      <View style={styles.form}>
        <View style={styles.fields}>
          <TextField
            label={'Name'}
            name="name"
            placeholder="Enter name"
            formik={formik}
          />
          <TextField
            label={'Last Name'}
            name="lastName"
            placeholder="Enter last name"
            formik={formik}
          />
          <TextField
            label={'Phone number'}
            name="phone"
            placeholder="+33 222 111 2222"
            mask={phoneMask}
            formik={formik}
          />
        </View>
        <BlockFlowButton
          variant="primary"
          text={'Continue'}
          onPress={() => formik.handleSubmit()}
          disabled={disabled}
          loading={auth.loading}
        />
      </View>
      <View style={styles.text}>
        <Text>Do you have an account?</Text>
        <HelperText
          text={'Login'}
          onPress={() => navigation.navigate(routes.login)}
        />
      </View>
    </AuthLayout>
  );
};
