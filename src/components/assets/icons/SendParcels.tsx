import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgSendParcels(props: SvgProps) {
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
        d="M21 15.998v-8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4a2 2 0 00-1 1.73v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4a2 2 0 001-1.73z"
        clipRule="evenodd"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 9.398l-9-5.19"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.77 6.092a1 1 0 10-1 1.732l8.23 4.76v9.494a1 1 0 102 0v-9.493l8.23-4.761a1 1 0 10-1-1.732L12 10.852l-8.23-4.76z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgSendParcels;
