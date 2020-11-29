import React from 'react';

import { Layout, ParcelSizeCard } from 'components';
import { SendParcelRoutes, StackNavigationProps } from 'types';

const ParcelSize = ({ navigation }: StackNavigationProps<SendParcelRoutes, 'ParcelSize'>) => {
  const navigateToNextPage = (parcelSize: string) => {
    navigation.navigate('DeliveryMethod', {
      parcelSize,
    });
  };

  return (
    <Layout headingBig="Send parcel" headingSmall="Parcel size">
      <ParcelSizeCard size="small" onPress={() => navigateToNextPage('Small')} />
      <ParcelSizeCard size="medium" onPress={() => navigateToNextPage('Medium')} />
      <ParcelSizeCard size="large" onPress={() => navigateToNextPage('Large')} />
      <ParcelSizeCard size="custom" onPress={() => navigateToNextPage('Custom')} />
    </Layout>
  );
};

export default ParcelSize;
