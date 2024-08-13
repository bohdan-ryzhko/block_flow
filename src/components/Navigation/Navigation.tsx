import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import {
  Home,
  Login,
  Register,
  VerificationCode,
  Welcome,
} from '../../screens';
import { colors, routes } from '../../consts';
import { RootStackParamList } from '../../interfaces';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: colors.white,
          },
          headerBackTitleVisible: false,
        }}
        initialRouteName={routes.welcome}>
        <Stack.Screen
          name={routes.welcome}
          component={Welcome}
          options={{ header: () => false }}
        />
        <Stack.Screen
          name={routes.login}
          component={Login}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name={routes.register}
          component={Register}
          options={{
            title: 'Register',
          }}
        />
        <Stack.Screen
          name={routes.verifyCode}
          component={VerificationCode}
          options={{
            title: 'Verification Code',
          }}
        />
        <Stack.Screen
          name={routes.home}
          component={Home}
          options={{
            title: 'Home',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
