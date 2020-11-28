import * as React from 'react';

import Box from 'components/Box';
import StyledImage from 'components/StyledImage';

function ImageAmazon(props: any) {
  return (
    <Box {...props}>
      <StyledImage
        source={require('assets/images/brands/amazon.png')}
        resizeMode="contain"
      />
    </Box>
  );
}

export default ImageAmazon;
