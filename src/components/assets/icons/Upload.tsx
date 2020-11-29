import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgUpload(props: SvgProps) {
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
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
      />
    </Svg>
  );
}

export default SvgUpload;
