import * as React from 'react';

import StyledImage from 'components/StyledImage';
import Box from 'components/Box';

function ImageEnvelope() {
  return (
    <Box width={66} height={99}>
      <StyledImage
        source={require('assets/images/illustrations/Envelope.png')}
        resizeMode="contain"
      />
    </Box>
  );
}

export default ImageEnvelope;
