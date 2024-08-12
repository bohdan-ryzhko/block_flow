import { FC } from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from './styles';
import MaskInput, { Mask } from 'react-native-mask-input';
import { FormikValues } from 'formik';
import { globalStyles } from '../../utils';

type props = {
  label: string;
  name: string;
  formik: FormikValues;
  placeholder?: string;
  mask?: Mask;
};

export const TextField: FC<props> = ({
  label,
  mask,
  placeholder,
  name,
  formik,
}) => {
  const errorMessage = formik.errors[name];

  const isError = errorMessage && formik.touched[name];

  return (
    <View style={styles.wrapper}>
      <Text style={[globalStyles.font, styles.label]}>{label}</Text>
      {mask ? (
        <MaskInput
          value={formik.values[name]}
          style={styles.input}
          onChangeText={formik.handleChange(name)}
          onBlur={formik.handleBlur(name)}
          mask={mask}
          placeholder={placeholder}
        />
      ) : (
        <TextInput
          value={formik.values[name]}
          onChangeText={formik.handleChange(name)}
          onBlur={formik.handleBlur(name)}
          style={styles.input}
          placeholder={placeholder}
        />
      )}
      {isError && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};
