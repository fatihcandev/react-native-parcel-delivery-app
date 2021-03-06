import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';
import { AuthRoutes } from 'types';
import { navHorizontalTransitionConfig } from '@constants';
import { Login, LoginVerifyCode } from 'views';

const AuthStack = createStackNavigator<AuthRoutes>();

const AuthNavigator = () => {
  const theme = useTheme<Theme>();

  return (
    <AuthStack.Navigator
      headerMode="screen"
      initialRouteName="Login"
      screenOptions={{
        ...navHorizontalTransitionConfig,
      }}
    >
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Continue with phone number',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: theme.colors.black,
          },
        }}
      />
      <AuthStack.Screen
        name="LoginVerifyCode"
        component={LoginVerifyCode}
        options={{
          headerTitle: 'Verify phone number',
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: theme.colors.black,
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
