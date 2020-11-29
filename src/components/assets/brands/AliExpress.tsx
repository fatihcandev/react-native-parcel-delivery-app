import * as React from 'react';

import Box from 'components/Box';
import StyledImage from 'components/StyledImage';

function ImageAliExpress(props: any) {
  return (
    <Box {...props}>
      <StyledImage source={require('assets/images/brands/aliexpress.png')} resizeMode="contain" />
    </Box>
  );
}

export default ImageAliExpress;
