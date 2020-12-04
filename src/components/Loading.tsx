import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Theme } from 'theme';
import Box from './Box';

interface ILoadingProps {
  fullScreen?: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ fullScreen }) => {
  const theme = useTheme<Theme>();
  const { width, height } = Dimensions.get('window');

  return (
    <Box
      width={fullScreen ? width : undefined}
      height={fullScreen ? height : undefined}
      style={{ ...StyleSheet.absoluteFillObject }}
      justifyContent="center"
      alignItems="center"
      backgroundColor={fullScreen ? 'overlay' : 'white'}
    >
      <ActivityIndicator color={theme.colors.yellowDark} size="large" />
    </Box>
  );
};

export default Loading;
