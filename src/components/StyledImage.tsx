import React from 'react';
import { Image, ImageProps } from 'react-native';

const StyledImage = ({ ...props }: ImageProps) => {
  return <Image style={{ width: '100%', height: '100%' }} {...props} />;
};

export default StyledImage;
