import { layout, LayoutProps, spacing, SpacingProps, useRestyle } from '@shopify/restyle';
import React from 'react';

import { Theme } from 'theme';
import Box from './Box';

type ICardProps = LayoutProps<Theme> & SpacingProps<Theme>;

const Card: React.FC<ICardProps> = ({ children, ...restyleProps }) => {
  const props = useRestyle([layout, spacing], restyleProps);
  return (
    <Box
      padding="m"
      backgroundColor="white"
      borderRadius="s"
      shadowColor="shadow"
      shadowRadius={10}
      elevation={3}
      borderColor="greyLighter"
      borderWidth={1}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
