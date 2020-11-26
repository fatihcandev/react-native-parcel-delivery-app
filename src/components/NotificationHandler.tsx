import { useContext, useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';

import { AppContext, SET_NOTIFICATION_DATA } from 'context';

const NotificationHandler = () => {
  const { dispatch } = useContext(AppContext);
  const [notificationPermitted, setNotificationPermitted] = useState<boolean>(
    false,
  );

  useEffect(() => {
    async function getPermission() {
      const authStatus = await messaging().requestPermission();
      const permitted =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      setNotificationPermitted(permitted);
      if (permitted) {
        const fcmToken = await messaging().getToken();
        console.log('Your Firebase Token is:', fcmToken);
        console.log('Authorization status:', authStatus);
      }
    }

    getPermission();
  }, []);

  useEffect(() => {
    async function getBackgroundNotification() {
      if (notificationPermitted) {
        messaging().onNotificationOpenedApp(async notification => {
          dispatch({
            type: SET_NOTIFICATION_DATA,
            data: {
              notification,
            },
          });
        });
      }
    }

    getBackgroundNotification();
  }, [notificationPermitted, dispatch]);

  useEffect(() => {
    async function getQuitStateNotification() {
      if (notificationPermitted) {
        const notification = await messaging().getInitialNotification();
        if (notification !== null) {
          dispatch({
            type: SET_NOTIFICATION_DATA,
            data: {
              notification,
            },
          });
        }
      }
    }

    getQuitStateNotification();
  }, [notificationPermitted, dispatch]);

  return null;
};

export default NotificationHandler;
