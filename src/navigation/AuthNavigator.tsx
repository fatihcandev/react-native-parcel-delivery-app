import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthRoutes } from 'types';
import { Login, LoginVerifyCode } from 'views';
import theme from 'theme';

const AuthStack = createStackNavigator<AuthRoutes>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator headerMode="screen" initialRouteName="Login">
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
