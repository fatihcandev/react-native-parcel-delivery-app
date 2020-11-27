import React, { useContext, useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';

import {
  AppContext,
  CLEAR_NOTIFICATION_DATA,
  SET_NOTIFICATION_DATA,
} from 'context';
import Notification from './Notification';

const NotificationHandler: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [notificationPermitted, setNotificationPermitted] = useState<boolean>(
    false,
  );
  let notificationDetails = state.notification?.notification!;

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
      }
    }

    getPermission();
  }, []);

  useEffect(() => {
    function getBackgroundNotification() {
      if (notificationPermitted) {
        messaging().onNotificationOpenedApp(notification => {
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
        if (
          notification !== null &&
          notification.messageType !== 'foreground'
        ) {
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

  useEffect(() => {
    function getForegroundNotification() {
      if (notificationPermitted) {
        messaging().onMessage(notification => {
          dispatch({
            type: SET_NOTIFICATION_DATA,
            data: {
              notification: {
                ...notification,
                messageType: 'foreground',
              },
            },
          });
        });
      }
    }

    getForegroundNotification();
  }, [notificationPermitted, dispatch]);

  useEffect(() => {
    if (notificationDetails) {
      const timeout = setTimeout(() => {
        dispatch({
          type: CLEAR_NOTIFICATION_DATA,
        });
      }, 4000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [dispatch, notificationDetails]);

  return notificationDetails ? (
    <Notification {...{ notificationDetails }} />
  ) : null;
};

export default NotificationHandler;
