import notifee, { Notification } from '@notifee/react-native';

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
    });

    await notifee.displayNotification({
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon',
        pressAction: {
          id: 'default',
        },
      },
      ...notification,
    });
  };
};
