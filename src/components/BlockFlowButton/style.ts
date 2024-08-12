import { StyleSheet } from 'react-native';
import { colors } from '../../consts';

export const styles = StyleSheet.create({
  button: {
    minWidth: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    position: 'relative',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  primaryText: {
    color: colors.white,
  },
  secondary: {
    borderWidth: 1,
    borderColor: colors.silver,
  },
  secondaryText: {
    color: colors.black,
  },
  disabledButton: {
    opacity: 0.25,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    right: 10,
  },
});
