import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgArrowDown(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}>
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 9l6 6 6-6"
      />
    </Svg>
  );
}

export default SvgArrowDown;
