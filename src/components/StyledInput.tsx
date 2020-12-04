import React, { useState } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import Box from './Box';
import Input from './Input';
import StyledText from './StyledText';

interface IStyledInputProps {
  type: 'default' | 'search';
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (v: string) => void;
  keyboardType?: 'default' | 'email-address' | 'phone-pad' | 'numeric';
  maxLength?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: StyleProp<TextStyle>;
}

const StyledInput: React.FC<IStyledInputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  maxLength,
  onFocus,
  onBlur,
  style,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isSearch = type === 'search';

  const handleFocus = () => {
    setIsFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur && onBlur();
  };

  return (
    <Box position="relative">
      {!isSearch && (
        <StyledText variant="bodyPrimary" color={isFocused ? 'black' : 'grey'} marginBottom="s">
          {label}
        </StyledText>
      )}
      <Input
        variant="bodyPrimary"
        height={50}
        backgroundColor="white"
        paddingLeft="m"
        color="black"
        borderWidth={isSearch ? 0 : 1}
        borderColor={isFocused ? 'black' : 'grey'}
        borderRadius="s"
        placeholderTextColor="grey"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...{
          placeholder,
          value,
          onChangeText,
          style,
          keyboardType,
          maxLength,
        }}
      />
    </Box>
  );
};

export default StyledInput;
