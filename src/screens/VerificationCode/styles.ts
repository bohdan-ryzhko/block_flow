import { StyleSheet } from 'react-native';
import { colors } from '../../consts';

export const styles = StyleSheet.create({
  form: {
    gap: 40,
    alignItems: 'center',
  },
  resendCode: {
    color: colors.accent,
    textDecorationLine: 'underline',
  },
});
