import * as React from 'react';

import StyledImage from 'components/StyledImage';
import Box from 'components/Box';

function ImagePaymentCardBgShapeBottom() {
  return (
    <Box width={192} height={192}>
      <StyledImage
        source={require('assets/images/illustrations/PaymentCardBgShapeBottom.png')}
        resizeMode="contain"
      />
    </Box>
  );
}

export default ImagePaymentCardBgShapeBottom;
