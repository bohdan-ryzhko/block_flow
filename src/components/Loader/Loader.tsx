import { FC } from 'react';
import { ActivityIndicator, ColorValue, SafeAreaView } from 'react-native';
import { colors } from '../../consts';
import { styles } from './styles';

type props = {
  size?: number | 'small' | 'large';
  color?: ColorValue;
  fullScreen?: boolean;
};

export const Loader: FC<props> = ({
  size = 'small',
  color = colors.primary,
  fullScreen = false,
}) => {
  return (
    <SafeAreaView style={[fullScreen && styles.wrapper]}>
      <ActivityIndicator size={size} color={color} />
    </SafeAreaView>
  );
};
