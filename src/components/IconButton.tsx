import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Box from './Box';
import Icon from './Icon';

interface IIconButtonProps {
  icon: string;
  onPress: () => void;
}

const IconButton: React.FC<IIconButtonProps> = ({ icon, onPress }) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        width={50}
        height={50}
        borderRadius="s"
        backgroundColor="white"
        justifyContent="center"
        alignItems="center">
        <Icon name={icon} color="black" />
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default IconButton;
