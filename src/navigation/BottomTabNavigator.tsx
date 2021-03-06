import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';
import { BottomTabRoutes } from 'types';
import { useNavigateFromNotification } from 'utils';
import { Icon } from 'components';
import { MyParcels, ParcelCenter } from 'views';
import SendParcelNavigator from './SendParcelNavigator';
import GalleryNavigator from './GalleryNavigator';

const BottomTab = createBottomTabNavigator<BottomTabRoutes>();

const BottomTabNavigator = () => {
  const navigateFromNotification = useNavigateFromNotification();
  const theme = useTheme<Theme>();

  useEffect(() => {
    navigateFromNotification();
  }, [navigateFromNotification]);

  return (
    <BottomTab.Navigator
      initialRouteName="MyParcels"
      tabBarOptions={{
        activeTintColor: theme.colors.black,
        inactiveTintColor: theme.colors.tabBarIconInactive,
        labelStyle: {
          fontSize: 12,
          marginBottom: theme.spacing.s,
        },
        style: {
          height: 65,
          backgroundColor: theme.colors.white,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="MyParcels"
        component={MyParcels}
        options={{
          tabBarIcon: ({ color }) => <Icon name="myParcels" {...{ color }} />,
          tabBarLabel: 'My parcels',
        }}
      />
      <BottomTab.Screen
        name="SendParcel"
        component={SendParcelNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name="sendParcels" {...{ color }} />,
          tabBarLabel: 'Send parcel',
        }}
      />
      <BottomTab.Screen
        name="ParcelCenter"
        component={ParcelCenter}
        options={{
          tabBarIcon: ({ color }) => <Icon name="parcelCenter" {...{ color }} />,
          tabBarLabel: 'Parcel center',
        }}
      />
      <BottomTab.Screen
        name="Gallery"
        component={GalleryNavigator}
        options={{
          tabBarIcon: ({ color }) => <Icon name="gallery" {...{ color }} />,
          tabBarLabel: 'Gallery',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
