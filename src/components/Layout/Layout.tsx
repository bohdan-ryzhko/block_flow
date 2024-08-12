import { FC, PropsWithChildren } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';

interface props extends Required<PropsWithChildren> {}

export const Layout: FC<props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.innerWrapper}>{children}</View>
    </SafeAreaView>
  );
};
