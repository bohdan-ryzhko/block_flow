import { FC } from 'react';
import { Text, View } from 'react-native';
import { BlockFlowButton, IconWelcome, Layout } from '../../components';
import { styles } from './styles';
import { useNavigate } from '../../hooks';
import { routes } from '../../consts';
import { globalStyles } from '../../utils';

export const Welcome: FC = () => {
  const navigation = useNavigate();

  return (
    <Layout>
      <View style={styles.image}>
        <IconWelcome />
      </View>
      <View style={styles.text}>
        <Text style={[globalStyles.font, styles.title]}>Welcome to App</Text>
        <Text style={[globalStyles.font, styles.description]}>
          Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet
          phasellus augue. Neque at felis pulvinar malesuada varius egestas dis
          cras.
        </Text>
      </View>
      <View style={styles.buttons}>
        <BlockFlowButton
          variant="primary"
          text={'Login'}
          onPress={() => navigation.navigate(routes.login)}
        />
        <BlockFlowButton
          text={'Register'}
          onPress={() => navigation.navigate(routes.register)}
        />
      </View>
    </Layout>
  );
};
