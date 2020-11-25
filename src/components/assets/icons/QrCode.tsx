import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgQrCode(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}>
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 2h7.597v7.538H2V2zm2.48 2.462h2.481v2.461h-2.48V4.462zM14.404 2H22v7.538h-7.597V2zm2.636 2.462h2.48v2.461h-2.48V4.462zm-7.442 10H2V22h7.597v-7.539zM6.96 16.922h-2.48v2.462h2.48v-2.462zm-2.48-6.154H2v2.462h2.48v-2.462zm6.201 0h-2.48v2.462h2.48v2.461h2.48V10.77h-2.48zm6.202 4.923h-2.48v1.231h-3.721v4.923h2.48v-2.461H16.883v-3.693zm2.48 0h2.48v3.693h-2.48v2.461h-2.48v-2.461h2.48v-3.693zM13.163 4.615h-2.48v4.923h2.48V4.615zm1.24 6.154h2.48v2.462h-2.48v-2.462zm4.961 2.462h-2.48v2.461h2.48v-2.461h2.48v-2.462h-2.48v2.462z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgQrCode;
