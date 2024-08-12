import { FC } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
} from 'react-native';
import { styles } from './styles';
import { globalStyles } from '../../utils';

type props = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<TextStyle>;
};

export const HelperText: FC<props> = ({ text, onPress, style }) => {
  return (
    <Text onPress={onPress} style={[globalStyles.font, styles.text, style]}>
      {text}
    </Text>
  );
};
