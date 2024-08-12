import { FC } from 'react';
import { Text, View } from 'react-native';
import { CommonActions, RouteProp } from '@react-navigation/native';
import {
  AuthLayout,
  BlockFlowButton,
  HelperText,
  ReloadPage,
  TextField,
} from '../../components';
import { styles } from './styles';
import {
  useAlert,
  useAppDispatch,
  useNavigate,
  useReduxStore,
} from '../../hooks';
import { phoneMask, routes } from '../../consts';
import { FormikHelpers, useFormik } from 'formik';
import { loginValidationSchema } from './utils';
import { ILogin, RootStackParamList } from '../../interfaces';
import { getDisabled } from '../../utils';
import { login, resetAuthData } from '../../redux';
import { unwrapResult } from '@reduxjs/toolkit';

const initialValues: ILogin = {
  phone: '',
};

type props = {
  route: RouteProp<RootStackParamList, 'login'>;
};

export const Login: FC<props> = ({ route }) => {
  const { auth } = useReduxStore();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const alert = useAlert();

  const onSubmit = async (
    values: ILogin,
    formikHelpers: FormikHelpers<ILogin>,
  ) => {
    const user = await dispatch(login(values)).then(unwrapResult);

    if (!user) {
      alert({
        title: "You don't have an account. Sign up?",
        buttons: [
          {
            text: 'Sign up',
            onPress: () =>
              navigation.navigate(routes.register, { phone: values.phone }),
          },
          { text: 'Cancel', style: 'destructive' },
        ],
      });

      return;
    }

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routes.home }],
      }),
    );

    dispatch(resetAuthData());
    formikHelpers.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      phone: route.params?.existingPhone || '',
    },
    onSubmit,
    validationSchema: loginValidationSchema,
  });

  const disabled = getDisabled(formik);

  return (
    <>
      {!auth.loading && auth.error && (
        <ReloadPage
          refreshing={auth.loading}
          onRefresh={() => formik.handleSubmit()}
        />
      )}

      <AuthLayout subtitle={'Please enter your details.'}>
        <View style={styles.form}>
          <TextField
            label={'Phone number'}
            name="phone"
            placeholder="+33 222 111 2222"
            mask={phoneMask}
            formik={formik}
          />
          <BlockFlowButton
            variant="primary"
            text={'Login'}
            onPress={() => formik.handleSubmit()}
            disabled={disabled}
            loading={auth.loading}
          />
        </View>
        <View style={styles.text}>
          <Text>Don't have an account?</Text>
          <HelperText
            text={'Sign up'}
            onPress={() => navigation.navigate(routes.register)}
          />
        </View>
      </AuthLayout>
    </>
  );
};
