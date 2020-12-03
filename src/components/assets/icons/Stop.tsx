import * as React from 'react';
import Svg, { SvgProps, Rect } from 'react-native-svg';

function SvgStop(props: SvgProps) {
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
      className="prefix__feather prefix__feather-square"
      {...props}
    >
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    </Svg>
  );
}

export default SvgStop;
