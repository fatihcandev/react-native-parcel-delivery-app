import React from 'react';

import { Layout } from 'components';
import { SendParcelRoutes, StackNavigationProps } from 'types';

const Checkout = ({ route }: StackNavigationProps<SendParcelRoutes, 'Checkout'>) => {
  const { parcelSize, deliveryMethod, recipientInfo } = route.params;
  // const { name, email, address, phoneNumber } = recipientInfo;

  console.log('parcel size: ', parcelSize);
  console.log('delivery method: ', deliveryMethod);
  console.log('recipient info: ', recipientInfo);

  return <Layout headingBig="Checkout" />;
};

export default Checkout;
