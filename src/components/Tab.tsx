import React from 'react';
import { StyleProp, ViewStyle, TextStyle, Pressable } from 'react-native';

import theme from 'theme';
import Box from './Box';
import Icon from './Icon';
import StyledText from './StyledText';

interface ITabProps {
  label: string;
  onPress: () => void;
  isActive: boolean;
  icon?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Tab: React.FC<ITabProps> = ({
  label,
  isActive,
  onPress,
  icon,
  containerStyle,
  labelStyle,
}) => {
  return (
    <Pressable
      {...{ onPress }}
      android_ripple={{
        radius: 100,
      }}
    >
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        paddingVertical="s"
        paddingHorizontal="m"
        borderBottomWidth={isActive ? 2 : 0}
        borderBottomColor="yellowDark"
        style={containerStyle}
      >
        {icon && <Icon name={icon} color={isActive ? theme.colors.yellow : theme.colors.black} />}
        <StyledText
          variant="tab"
          color={isActive ? 'yellowDark' : 'black'}
          style={[{ marginLeft: icon ? theme.spacing.s : 0 }, labelStyle]}
        >
          {label}
        </StyledText>
      </Box>
    </Pressable>
  );
};

export default Tab;
