import * as React from 'react';
import Svg, { SvgProps, Mask, Path, G } from 'react-native-svg';

function SvgVisa(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 52 18"
      className=""
      {...props}>
      <Mask
        id="Visa_svg__a"
        width={51}
        height={18}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M26.062 6.158c-.028 2.258 2.013 3.518 3.55 4.267 1.58.77 2.11 1.262 2.104 1.95-.012 1.052-1.26 1.516-2.428 1.534-2.038.031-3.223-.55-4.165-.99l-.734 3.435c.945.435 2.695.815 4.51.832 4.26 0 7.047-2.103 7.062-5.363.017-4.138-5.723-4.367-5.684-6.217.013-.56.549-1.159 1.721-1.311.58-.077 2.183-.136 4 .7l.712-3.323c-.977-.356-2.232-.696-3.795-.696-4.01 0-6.83 2.131-6.853 5.182zm17.5-4.896a1.85 1.85 0 00-1.727 1.15l-6.085 14.53h4.257l.847-2.341h5.202l.491 2.34H50.3L47.025 1.263h-3.464zm.595 4.236l1.228 5.888h-3.364l2.136-5.888zM20.9 1.262l-3.355 15.68h4.056l3.354-15.68H20.9zm-6 0l-4.223 10.672L8.97 2.86c-.2-1.013-.992-1.598-1.87-1.598H.197l-.096.455c1.417.308 3.027.804 4.002 1.334.597.324.767.608.963 1.378l3.235 12.513h4.287l6.572-15.68H14.9z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#Visa_svg__a)">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M-5.156 2.912l49.46-18.215L55.556 15.25 6.096 33.465"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
}

export default SvgVisa;
