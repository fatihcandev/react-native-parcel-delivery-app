import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStack } from 'types';
import { Camera } from 'views';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStack>();

const Navigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  );
};

export default Navigator;
