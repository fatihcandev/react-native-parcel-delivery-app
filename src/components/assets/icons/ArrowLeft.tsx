import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgArrowLeft(props: SvgProps) {
  return (
    <Svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </Svg>
  );
}

export default SvgArrowLeft;
