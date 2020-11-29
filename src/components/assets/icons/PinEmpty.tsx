import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgPinEmpty(props: SvgProps) {
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
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0v0z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgPinEmpty;
