import * as React from 'react';
import Svg, { SvgProps, Path, Defs, Pattern, Use } from 'react-native-svg';

function SvgAliExpress(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 78 31"
      className=""
      {...props}>
      <Path fill="url(#AliExpress_svg__pattern0)" d="M0 0h78v31H0z" />
      <Defs>
        <Pattern
          id="AliExpress_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <Use
            transform="scale(.0008 .002)"
            xlinkHref="#AliExpress_svg__image0"
          />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAliExpress;
