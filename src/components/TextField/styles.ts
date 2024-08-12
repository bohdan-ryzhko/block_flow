import { StyleSheet } from 'react-native';
import { colors } from '../../consts';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    minWidth: '100%',
    height: 65,
    position: 'relative',
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 17,
    color: colors.body700,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    width: '100%',
    borderColor: colors.body300,
    borderRadius: 8,
  },
  errorText: {
    position: 'absolute',
    left: 0,
    bottom: -20,
    color: colors.error,
  },
});
