import * as React from 'react';
import { Image } from 'react-native';

import Box from 'components/Box';

function ImageMapRoute(props: any) {
  return (
    <Box {...props}>
      <Image
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        source={require('assets/images/illustrations/MapRoute.png')}
      />
    </Box>
  );
}

export default ImageMapRoute;
