import { FC, PropsWithChildren } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Layout } from '../index';
import { styles } from './styles';
import { globalStyles } from '../../utils';

type props = {
  subtitle: string;
} & Required<PropsWithChildren>;

export const AuthLayout: FC<props> = ({ children, subtitle }) => {
  return (
    <Layout>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerWrapper}>
          <KeyboardAvoidingView
            style={styles.innerWrapper}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <View style={styles.text}>
              <Text style={[globalStyles.font, styles.title]}>
                Welcome to App
              </Text>
              <Text style={[globalStyles.font, styles.subtitle]}>
                {subtitle}
              </Text>
            </View>
            {children}
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
};
