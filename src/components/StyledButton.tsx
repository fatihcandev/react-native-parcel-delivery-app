import React from 'react';
import { TouchableOpacity } from 'react-native';

import StyledText from './StyledText';
import Box from './Box';

interface IStyledButtonProps {
  label?: string;
  onPress: () => void;
}

const StyledButton: React.FC<IStyledButtonProps> = ({
  onPress,
  label,
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  );
};

export default StyledButton;
