import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';

import Box from './Box';
import Icon from './Icon';

interface IFABProps {
  icon: string;
  onPress: () => void;
}

const FAB: React.FC<IFABProps> = ({ icon, onPress }) => {
  const { width } = Dimensions.get('window');
  return (
    <Box
      position="absolute"
      bottom={0}
      padding="m"
      {...{ width }}
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="center"
    >
      <TouchableOpacity {...{ onPress }}>
        <Box
          width={75}
          height={75}
          justifyContent="center"
          alignItems="center"
          backgroundColor="yellowDark"
          borderRadius="cameraShutter"
          elevation={2}
        >
          <Icon name={icon} color="white" width="30" height="30" />
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default FAB;
