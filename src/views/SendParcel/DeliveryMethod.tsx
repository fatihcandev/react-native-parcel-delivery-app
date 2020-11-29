import React from 'react';

import { Layout, ParcelDeliveryMethodCard } from 'components';
import { SendParcelRoutes, StackNavigationProps } from 'types';

const DeliveryMethod = ({ route }: StackNavigationProps<SendParcelRoutes, 'DeliveryMethod'>) => {
  let parcelSize = route.params.parcelSize;

  console.log('Selected size: ', parcelSize);
  return (
    <Layout headingSmall="Delivery method">
      <ParcelDeliveryMethodCard method="doorToParcelCenter" />
      <ParcelDeliveryMethodCard method="doorToDoor" />
    </Layout>
  );
};

export default DeliveryMethod;
