import { FC } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { ArrowUp } from '../icons';
import { globalStyles } from '../../utils';

type props = {
  refreshing: boolean;
  onRefresh: () => void;
};

export const ReloadPage: FC<props> = ({ refreshing, onRefresh }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ArrowUp />
        <Text style={globalStyles.font}>Something went wrong. Pull it up</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
