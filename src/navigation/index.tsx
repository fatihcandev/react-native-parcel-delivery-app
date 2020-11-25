import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStack } from 'types';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStack>();

const Navigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default Navigator;
