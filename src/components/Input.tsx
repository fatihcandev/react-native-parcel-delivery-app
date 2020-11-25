import { TextInput } from 'react-native';
import {
  backgroundColor,
  BackgroundColorProps,
  color,
  createRestyleComponent,
  spacing,
  SpacingProps,
  VariantProps,
  border,
  ColorProps,
  BorderProps,
  LayoutProps,
  layout,
  typography,
  TypographyProps,
} from '@shopify/restyle';
import { Theme } from 'theme';

type InputProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  ColorProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  VariantProps<Theme, 'textVariants'> &
  TypographyProps<Theme>;
const Input = createRestyleComponent<InputProps, Theme>(
  [spacing, backgroundColor, color, border, layout, typography],
  TextInput,
);

export default Input;
