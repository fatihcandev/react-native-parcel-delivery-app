import React from 'react';

import { Layout, ParcelSizeCard } from 'components';
import { SendParcelRoutes, StackNavigationProps } from 'types';

const ParcelSize = ({ navigation }: StackNavigationProps<SendParcelRoutes, 'ParcelSize'>) => {
  return (
    <Layout headingBig="Send parcel" headingSmall="Parcel size">
      <ParcelSizeCard
        size="small"
        onPress={() =>
          navigation.navigate('DeliveryMethod', {
            parcelSize: 'Small',
          })
        }
      />
      <ParcelSizeCard
        size="medium"
        onPress={() =>
          navigation.navigate('DeliveryMethod', {
            parcelSize: 'Medium',
          })
        }
      />
      <ParcelSizeCard
        size="large"
        onPress={() =>
          navigation.navigate('DeliveryMethod', {
            parcelSize: 'Large',
          })
        }
      />
      <ParcelSizeCard
        size="custom"
        onPress={() =>
          navigation.navigate('DeliveryMethod', {
            parcelSize: 'Custom',
          })
        }
      />
    </Layout>
  );
};

export default ParcelSize;
