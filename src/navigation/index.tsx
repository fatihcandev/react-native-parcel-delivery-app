import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStack } from 'types';
import { Box, Icon } from 'components';
import { Camera } from 'views';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStack>();

const Navigator = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
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
    </Stack.Navigator>
  );
};

export default Navigator;
