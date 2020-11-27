import * as React from 'react';
import { Image } from 'react-native';

import Box from 'components/Box';

function ImageMapParcelCenter(props: any) {
  return (
    <Box {...props}>
      <Image
        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
        source={require('assets/images/illustrations/MapParcelCenters.png')}
      />
    </Box>
  );
}

export default ImageMapParcelCenter;
