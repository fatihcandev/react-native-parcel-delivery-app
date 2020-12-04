import * as React from 'react';

import StyledImage from 'components/StyledImage';
import Box from 'components/Box';

function ImagePaymentCardBgShapeTopLeft() {
  return (
    <Box width={261} height={261}>
      <StyledImage
        source={require('assets/images/illustrations/PaymentCardBgShapeTopLeft.png')}
        resizeMode="contain"
      />
    </Box>
  );
}

export default ImagePaymentCardBgShapeTopLeft;
