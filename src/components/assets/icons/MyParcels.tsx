import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgMyParcels(props: SvgProps) {
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
        d="M17.454 5.88l-6.363-3.636a1.818 1.818 0 00-1.818 0L2.909 5.88A1.818 1.818 0 002 7.453v8.272"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 19.307v-8.25c0-.736-.347-1.416-.909-1.784H6.546c-.562.368-.909 1.048-.91 1.784v8.25c.001.736.348 1.416.91 1.784H21.09c.562-.368.908-1.048.91-1.784z"
        clipRule="evenodd"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.091 11.09l-6.364 3.637a1.818 1.818 0 01-1.818 0l-6.363-3.636"
      />
    </Svg>
  );
}

export default SvgMyParcels;
