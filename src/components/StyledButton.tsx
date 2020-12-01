import React from 'react';
import { ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Box from './Box';
import StyledText from './StyledText';

interface IStyledButtonProps {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: () => void;
}

const StyledButton: React.FC<IStyledButtonProps> = ({
  onPress,
  label,
  loading,
  disabled,
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress} {...{ disabled }}>
      <Box
        height={48}
        paddingVertical="button"
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
        borderRadius="s"
        opacity={disabled ? 0.5 : 1}
      >
        {loading ? (
          <ActivityIndicator color="white" size="small" />
        ) : label ? (
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
