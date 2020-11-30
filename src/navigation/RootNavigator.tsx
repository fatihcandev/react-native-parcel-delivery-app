import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { MainRoutes } from 'types';
import { Box, Icon } from 'components';
import { Camera } from 'views';
import BottomTabNavigator from './BottomTabNavigator';

const RootStack = createStackNavigator<MainRoutes>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator headerMode="screen" initialRouteName="Root">
      <RootStack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerLeft: ({ onPress }) => {
            return (
              <TouchableOpacity {...{ onPress }}>
                <Box padding="m">
                  <Icon name="arrowLeft" color="white" />
                </Box>
              </TouchableOpacity>
            );
          },
          title: '',
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
