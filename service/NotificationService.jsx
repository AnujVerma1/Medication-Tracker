import * as Notifications from 'expo-notifications';
import { showMessage } from '../utility/utilityFunctions';



export const scheduleNotification = async (title, body, triggerDate) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: true,
    },
    trigger: triggerDate,
  });
};


export const registerForPushNotificationsAsync = async () => {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    showMessage('Permission not granted for notifications'); 
    return null;
  }

  token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
};





