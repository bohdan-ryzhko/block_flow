import { FC } from 'react';
import { Text } from 'react-native';
import { Layout } from '../Layout';
import { globalStyles } from '../../utils';
import { styles } from './styles';

export const NoData: FC = () => {
  return (
    <Layout>
      <Text style={[globalStyles.font, styles.text]}>No Data</Text>
    </Layout>
  );
};
