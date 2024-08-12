import { FC } from 'react';
import { Platform, Text, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { styles } from './styles';
import { FormikValues } from 'formik';
import { globalStyles } from '../../utils';

const CELL_COUNT = 6;

type props = {
  label: string;
  formik: FormikValues;
  name: string;
};

export const VerifyCodeField: FC<props> = ({ label, formik, name }) => {
  const value = formik.values[name];
  const setValue = formik.handleChange(name);

  const ref = useBlurOnFulfill({
    value,
    cellCount: CELL_COUNT,
  });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const placeholder = '000000';

  return (
    <View style={styles.wrapper}>
      <Text style={[globalStyles.font, styles.label]}>{label}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.OS === 'android' ? 'sms-otp' : 'one-time-code'}
        testID="verify-code"
        renderCell={({ index, symbol, isFocused }) => {
          const isDashPosition = index === 2;

          return (
            <View style={styles.cellWrapper} key={index}>
              <Text
                style={[
                  styles.text,
                  styles.cell,
                  isFocused && styles.focusCell,
                  !!symbol && styles.focusCell,
                ]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : placeholder[index])}
              </Text>
              {isDashPosition && (
                <Text style={[globalStyles.font, styles.text]}>-</Text>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};
