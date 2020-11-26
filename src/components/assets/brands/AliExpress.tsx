import * as React from 'react';
import { Image } from 'react-native';
import { Box } from 'components';

function ImageAliExpress(props: any) {
  return (
    <Box {...props}>
      <Image
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        source={require('assets/images/brands/aliexpress.png')}
      />
    </Box>
  );
}

export default ImageAliExpress;
