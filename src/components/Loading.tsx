import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import theme from 'theme';

import Box from './Box';

interface ILoadingProps {
  fullScreen?: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ fullScreen }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <Box
      width={fullScreen ? width : undefined}
      height={fullScreen ? height : undefined}
      style={{ ...StyleSheet.absoluteFillObject }}
      justifyContent="center"
      alignItems="center"
      backgroundColor={fullScreen ? 'tabBarIconInactive' : 'transparent'}>
      <ActivityIndicator color={theme.colors.yellowDark} size="large" />
    </Box>
  );
};

export default Loading;
