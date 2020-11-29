import * as React from 'react';

import StyledImage from 'components/StyledImage';
import Box from 'components/Box';

function ImageBigBox() {
  return (
    <Box width={66} height={99}>
      <StyledImage
        source={require('assets/images/illustrations/BigBox.png')}
        resizeMode="contain"
      />
    </Box>
  );
}

export default ImageBigBox;
