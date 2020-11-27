import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgCourier(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}>
      <Path
        fill="none"
        fillRule="evenodd"
        d="M20.4 16.679V4.012a1 1 0 00-1-1H6.522a1 1 0 00-1 1l-.007 8.418H3a1 1 0 00-1 1v6.37a1 1 0 001 1h2.834a.9.9 0 00.9-.9h13.655c.889 0 1.611-.723 1.611-1.61 0-.885-.717-1.605-1.6-1.611z"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.51 19.077a.5.5 0 01-.5.5H3.724a.5.5 0 01-.5-.5v-4.924a.5.5 0 01.5-.5h1.288a.5.5 0 01.5.5v4.924zM6.745 4.735a.5.5 0 01.5-.5H18.676a.5.5 0 01.5.5V16.18a.5.5 0 01-.5.5h-5.79a.258.258 0 010-.515h2.19c.928 0 1.683-.755 1.683-1.683 0-.829-.618-1.544-1.438-1.665l-1.905-.28c-1.788-.263-2.921-.007-4.386.557l-2.293.983.008-9.34z"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.39 18.677H6.733V16.98l.002-1.573L9.48 14.23c1.495-.574 2.375-.688 3.758-.484l1.905.28a.46.46 0 01-.067.914h-2.19c-.816 0-1.48.665-1.48 1.481 0 .817.664 1.48 1.48 1.48h7.503a.388.388 0 010 .776z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgCourier;
