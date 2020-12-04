import React from 'react';

import { Asset, Box, Layout, ParcelCenterCard } from 'components';
import { parcelCentersData } from 'data';

const ParcelCenter = () => {
  return (
    <Layout headingBig="Parcel centers">
      <Box marginBottom="m">
        <Asset name="mapParcelCenters" height={264} />
      </Box>
      {parcelCentersData.map(details => (
        <ParcelCenterCard key={details.id} {...{ details }} />
      ))}
    </Layout>
  );
};

export default ParcelCenter;
