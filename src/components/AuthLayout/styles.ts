import { StyleSheet } from 'react-native';
import { colors } from '../../consts';

export const styles = StyleSheet.create({
  innerWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    gap: 8,
    marginBottom: 40,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    color: colors.black,
    lineHeight: 28,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.body500,
    lineHeight: 22,
  },
});
