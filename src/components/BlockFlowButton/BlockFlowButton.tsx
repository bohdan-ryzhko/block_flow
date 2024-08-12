import { FC } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from './style';
import {
  Variant,
  getColorLoader,
  getStylesButton,
  getStylesText,
} from './utils';
import { Loader } from '../Loader';
import { globalStyles } from '../../utils';

type props = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  variant?: Variant;
  loading?: boolean;
};

export const BlockFlowButton: FC<props> = ({
  onPress,
  text,
  style,
  disabled = false,
  variant = 'secondary',
  loading = false,
}) => (
  <TouchableOpacity
    disabled={disabled || loading}
    style={[
      styles.button,
      getStylesButton(variant),
      disabled && styles.disabledButton,
      style,
    ]}
    onPress={onPress}>
    <Text style={[globalStyles.font, styles.text, getStylesText(variant)]}>
      {text}
    </Text>
    {loading && (
      <View style={styles.loader}>
        <Loader color={getColorLoader(variant)} />
      </View>
    )}
  </TouchableOpacity>
);
