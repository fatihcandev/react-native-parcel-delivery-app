import * as React from 'react';

import Box from 'components/Box';
import StyledImage from 'components/StyledImage';

function ImageZalando(props: any) {
  return (
    <Box {...props}>
      <StyledImage
        source={require('assets/images/brands/zalando.png')}
        resizeMode="contain"
      />
    </Box>
  );
}

export default ImageZalando;
