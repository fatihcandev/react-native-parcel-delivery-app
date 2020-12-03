import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPlay(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M5 3l14 9-14 9V3z" />
    </Svg>
  );
}

export default SvgPlay;
