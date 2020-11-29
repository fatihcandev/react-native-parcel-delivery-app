import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgParcelCenter(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 14.5a1 1 0 100 2h10a1 1 0 100-2H7zm0 3a1 1 0 100 2h10a1 1 0 100-2H7z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgParcelCenter;
