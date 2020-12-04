import * as React from 'react';

import StyledImage from 'components/StyledImage';
import Box from 'components/Box';

function ImagePaymentCardBgShapeTopRight() {
  return (
    <Box width={192} height={192}>
      <StyledImage
        source={require('assets/images/illustrations/PaymentCardBgShapeTopRight.png')}
        resizeMode="contain"
      />
    </Box>
  );
}

export default ImagePaymentCardBgShapeTopRight;
