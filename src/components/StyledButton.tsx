import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import Box from './Box';
import StyledText from './StyledText';

interface IStyledButtonProps {
  label?: string;
  onPress: () => void;
}

const StyledButton: React.FC<IStyledButtonProps> = ({ onPress, label, children }) => {
  return (
    <RectButton onPress={onPress}>
      <Box
        width="100%"
        height={48}
        paddingVertical="button"
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
        borderRadius="s">
        {label ? (
          <StyledText variant="button" color="white">
            {label}
          </StyledText>
        ) : (
          children
        )}
      </Box>
    </RectButton>
  );
};

export default StyledButton;
