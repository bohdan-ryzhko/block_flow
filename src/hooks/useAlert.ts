import { Alert, AlertButton, AlertOptions } from 'react-native';

type Options = {
  title: string;
  message?: string;
  buttons?: AlertButton[];
  options?: AlertOptions;
};

export const useAlert = () => {
  return (
    options: Options = {
      title: 'Title',
      message: 'Message',
    },
  ) => {
    Alert.alert(
      options.title,
      options.message,
      options.buttons,
      options.options,
    );
  };
};
