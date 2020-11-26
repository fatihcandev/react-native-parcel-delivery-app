import React, { useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';

import { AppContext, SET_NOTIFICATION_DATA } from 'context';
import { RootStack } from 'types';
import { Camera } from 'views';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStack>();

const Navigator = () => {
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

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
};

export default Navigator;
