import React from 'react';
import { Image, ImageRequireSource } from 'react-native';

import Box from './Box';

interface IAvatarProps {
  src: ImageRequireSource;
}

const Avatar: React.FC<IAvatarProps> = ({ src }) => {
  return (
    <Box width={32} height={32} borderRadius="l">
      <Image width={32} height={32} source={src} />
    </Box>
  );
};

export default Avatar;
