import notifee, {
  AndroidImportance,
  Notification,
} from '@notifee/react-native';

export const useNotification = () => {
  return async (
    notification: Notification = {
      title: 'Notification Title',
      body: 'Main body content of the notification',
    },
  ) => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default',
        },
      },
      ...notification,
    });
  };
};
