import * as React from 'react';

import Box from 'components/Box';
import StyledImage from 'components/StyledImage';

function SvgPhoneVerification(props: any) {
  return (
    <Box {...props}>
      <StyledImage
        source={require('assets/images/illustrations/PhoneVerification.png')}
        resizeMode="contain"
      />
    </Box>
  );
}

export default SvgPhoneVerification;
