import * as React from 'react';
import Svg, { SvgProps, Path, Defs, Pattern, Use } from 'react-native-svg';

function SvgAmazon(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 60 20"
      className=""
      {...props}>
      <Path fill="url(#Amazon_svg__pattern0)" d="M0 0h60v20H0z" />
      <Defs>
        <Pattern
          id="Amazon_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <Use
            transform="scale(.00201 .00595)"
            xlinkHref="#Amazon_svg__image0"
          />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgAmazon;
