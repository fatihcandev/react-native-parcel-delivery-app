import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import theme from 'theme';
import Box from './Box';
import StyledText from './StyledText';

const UploadIndicator: React.FC = () => {
  const { width } = Dimensions.get('window');
  return (
    <Box
      style={StyleSheet.absoluteFill}
      backgroundColor="overlay"
      justifyContent="center"
      alignItems="center">
      <Box
        width={width - 32}
        height={100}
        flexDirection="row"
        alignItems="center"
        padding="l"
        backgroundColor="white"
        borderRadius="s">
        <Box marginRight="s">
          <ActivityIndicator color={theme.colors.yellowDark} size="large" />
        </Box>
        <StyledText variant="bodyPrimary">Uploading your pictures...</StyledText>
      </Box>
    </Box>
  );
};

export default UploadIndicator;
