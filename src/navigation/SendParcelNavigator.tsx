import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import { SendParcelRoutes } from 'types';
import { Checkout, DeliveryMethod, ParcelSize } from 'views/SendParcel';

const SendParcelStack = createStackNavigator<SendParcelRoutes>();

const SendParcelNavigator = () => {
  return (
    <SendParcelStack.Navigator
      headerMode="screen"
      screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
    >
      <SendParcelStack.Screen
        name="ParcelSize"
        component={ParcelSize}
        options={{ headerShown: false }}
      />
      <SendParcelStack.Screen
        name="DeliveryMethod"
        component={DeliveryMethod}
        options={{ headerShown: true, headerTitle: '', headerStyle: { elevation: 0 } }}
      />
      <SendParcelStack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: true, headerTitle: '', headerStyle: { elevation: 0 } }}
      />
    </SendParcelStack.Navigator>
  );
};

export default SendParcelNavigator;
