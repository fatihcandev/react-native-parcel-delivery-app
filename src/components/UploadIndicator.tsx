import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';

import theme from 'theme';
import Box from './Box';
import ProgressBar from './ProgressBar';
import StyledText from './StyledText';

interface IUploadIndicatorProps {
  progress: number;
}

const UploadIndicator: React.FC<IUploadIndicatorProps> = ({ progress }) => {
  const { width } = Dimensions.get('window');
  return (
    <Box
      style={StyleSheet.absoluteFill}
      backgroundColor="overlay"
      justifyContent="center"
      alignItems="center"
    >
      <Box width={width - 32} height={100} padding="l" backgroundColor="white" borderRadius="s">
        <Box flexDirection="row" alignItems="center" marginBottom="m">
          <Box marginRight="s">
            <ActivityIndicator color={theme.colors.yellowDark} size="large" />
          </Box>
          <StyledText variant="bodyPrimary">Uploading your pictures...</StyledText>
        </Box>
        <ProgressBar {...{ progress }} />
      </Box>
    </Box>
  );
};

export default UploadIndicator;
