import React from 'react';

import StyledText from './StyledText';

const InputInvalidMsg: React.FC = ({ children }) => {
  return (
    <StyledText variant="link" color="red" marginTop="s">
      {children}
    </StyledText>
  );
};

export default InputInvalidMsg;
