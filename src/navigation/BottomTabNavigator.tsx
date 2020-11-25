import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabRoutes } from 'types';
import theme from 'theme';
import { Icon } from 'components';
import { MyParcels, ParcelCenter } from 'views';
import SendParcelNavigator from './SendParcelNavigator';

const BottomTab = createBottomTabNavigator<BottomTabRoutes>();

const BottomTabNavigator = () => {
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
      }}>
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
          tabBarIcon: ({ color }) => (
            <Icon name="parcelCenter" {...{ color }} />
          ),
          tabBarLabel: 'Parcel center',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
