import * as React from 'react';
import Svg, { SvgProps, Path, Defs, Pattern, Use } from 'react-native-svg';

function SvgZalando(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 60 33"
      className=""
      {...props}>
      <Path fill="url(#Zalando_svg__pattern0)" d="M0 0h60v33H0z" />
      <Defs>
        <Pattern
          id="Zalando_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <Use
            transform="scale(.00154 .00286)"
            xlinkHref="#Zalando_svg__image0"
          />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgZalando;
