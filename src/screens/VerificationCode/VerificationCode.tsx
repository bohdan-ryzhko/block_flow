import { FC, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import {
  AuthLayout,
  BlockFlowButton,
  HelperText,
  ReloadPage,
  VerifyCodeField,
} from '../../components';
import {
  useAlert,
  useAppDispatch,
  useNavigate,
  useNotification,
  useReduxStore,
} from '../../hooks';
import { fetchCodeVerify, registration, resetAuthData } from '../../redux';
import { FormikHelpers, useFormik } from 'formik';
import { Code } from '../../interfaces';
import { validationSchema } from './utils';
import { styles } from './styles';
import { getDisabled } from '../../utils';
import { unwrapResult } from '@reduxjs/toolkit';
import { routes } from '../../consts';
import { CommonActions } from '@react-navigation/native';

type VerificationCodeValues = Pick<Code, 'code'>;

const initialValues: VerificationCodeValues = {
  code: '',
};

export const VerificationCode: FC = () => {
  const { auth } = useReduxStore();
  const dispatch = useAppDispatch();
  const alert = useAlert();
  const notification = useNotification();
  const navigation = useNavigate();

  const handleFetchCodeVerify = useCallback(async () => {
    const { code } = await dispatch(fetchCodeVerify()).then(unwrapResult);

    if (!code) return;

    notification({
      title: 'Verification code',
      body: code,
    });
  }, [dispatch]);

  useEffect(() => {
    handleFetchCodeVerify();
  }, [handleFetchCodeVerify]);

  const onSubmit = async (
    values: VerificationCodeValues,
    formikHelpers: FormikHelpers<VerificationCodeValues>,
  ) => {
    if (values.code !== auth.code?.code) {
      alert({
        title: 'Wrong verification code',
        buttons: [{ text: 'OK' }],
      });
      return;
    }

    if (!auth.registrationData) return;

    dispatch(registration(auth.registrationData));

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
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleResendCode = () => {
    formik.setValues(prev => ({ ...prev, code: '' }));
    handleFetchCodeVerify();
  };

  const disabled = getDisabled(formik);

  return (
    <>
      {!auth.loading && auth.error && (
        <ReloadPage refreshing={auth.loading} onRefresh={handleResendCode} />
      )}

      {!auth.loading && !auth.error && (
        <AuthLayout
          subtitle={
            'Enter the confirmation code that will be sent to you by SMS'
          }>
          <View style={styles.form}>
            <VerifyCodeField
              formik={formik}
              name="code"
              label={'Secure Code'}
            />
            <HelperText text={'Resend the Code'} onPress={handleResendCode} />
            <BlockFlowButton
              variant="primary"
              text={'Sign up'}
              onPress={() => formik.handleSubmit()}
              disabled={disabled}
              loading={auth.loading}
            />
          </View>
        </AuthLayout>
      )}
    </>
  );
};
