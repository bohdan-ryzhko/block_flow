import { routes } from '../consts';

export type Routes = keyof typeof routes;

export type RootStackParamList = {
  welcome: undefined;
  login?: {
    existingPhone: string;
  };
  register?: {
    phone: string;
  };
  verifyCode: undefined;
  home: undefined;
};
