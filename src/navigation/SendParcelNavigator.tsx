import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SendParcelRoutes } from 'types';
import { Checkout, DeliveryMethod, ParcelSize } from 'views/SendParcel';

const SendParcelStack = createStackNavigator<SendParcelRoutes>();

const SendParcelNavigator = () => {
  return (
    <SendParcelStack.Navigator headerMode="none">
      <SendParcelStack.Screen name="ParcelSize" component={ParcelSize} />
      <SendParcelStack.Screen
        name="DeliveryMethod"
        component={DeliveryMethod}
      />
      <SendParcelStack.Screen name="Checkout" component={Checkout} />
    </SendParcelStack.Navigator>
  );
};

export default SendParcelNavigator;
