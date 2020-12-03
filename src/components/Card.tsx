import {
  border,
  BorderProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  useRestyle,
} from '@shopify/restyle';
import React from 'react';

import { Theme } from 'theme';
import Box from './Box';

type ICardProps = LayoutProps<Theme> & SpacingProps<Theme> & BorderProps<Theme>;

const Card: React.FC<ICardProps> = ({ children, ...restyleProps }) => {
  const props = useRestyle([layout, spacing, border], restyleProps);
  return (
    <Box
      padding="m"
      backgroundColor="white"
      borderRadius="s"
      borderColor="greyLight"
      borderWidth={1}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
