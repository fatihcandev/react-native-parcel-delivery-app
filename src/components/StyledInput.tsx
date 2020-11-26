import React, { useState } from 'react';

import { Box, Input, StyledText } from 'components';

interface IStyledInputProps {
  type: 'default' | 'search';
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (v: string) => void;
}

const StyledInput: React.FC<IStyledInputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChangeText,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  let isSearch = type === 'search';

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <Box>
      {!isSearch && (
        <StyledText
          variant="bodyPrimary"
          color={focused ? 'black' : 'greyLight'}
          marginBottom="s">
          {label}
        </StyledText>
      )}
      <Input
        variant="bodyPrimary"
        height={50}
        backgroundColor="white"
        padding="m"
        color="black"
        borderWidth={isSearch ? 0 : 1}
        borderColor={focused ? 'black' : 'grey'}
        borderRadius="s"
        placeholderTextColor="grey"
        {...{ placeholder, value, onChangeText, onFocus, onBlur }}
      />
    </Box>
  );
};

export default StyledInput;
