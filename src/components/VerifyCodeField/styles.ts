import { StyleSheet } from 'react-native';
import { colors } from '../../consts';

export const styles = StyleSheet.create({
  wrapper: {
    gap: 6,
  },
  cellWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
  },
  codeFieldRoot: {
    gap: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: colors.silver,
  },
  cell: {
    width: 52,
    height: 64,
    borderWidth: 1,
    borderColor: colors.brderColorCell,
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'top',
    padding: 5,
  },
  focusCell: {
    borderColor: colors.focusBrderColorCell,
    color: colors.primary,
  },
});
