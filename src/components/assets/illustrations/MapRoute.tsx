import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Mask,
  G,
  Circle,
  Defs,
  Pattern,
  Use,
} from 'react-native-svg';

function SvgMapRoute(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 329 221"
      className=""
      {...props}>
      <Path fill="#D8D8D8" d="M0 0h328v221H0z" />
      <Mask
        id="MapRoute_svg__a"
        width={328}
        height={221}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M0 0h328v221H0z" />
      </Mask>
      <G mask="url(#MapRoute_svg__a)">
        <Path fill="url(#MapRoute_svg__pattern0)" d="M0-22h347v265H0z" />
      </G>
      <Path
        stroke="#111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M218.583 31.262s1.348.21 3.133.738a32.691 32.691 0 013.297 1.183v5.94c3.916 1.092 4.987 2.1 4.987 2.1h15.416v28.192h69.815s3.346-18.18 5.714-21.738c.669-3.696 1.06-13.89 1.06-13.89L328 29.002"
      />
      <Path
        stroke="#111"
        strokeDasharray="1 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M218.5 30.5l-4 3v1.94h-30.86v3.18l1.881.927 1.496 1.682-1.496 51.331h-15.856l-11.557-5.438-83.637 10.52H59.866l1.443 108.176H50.386v-6.079"
      />
      <Path
        fill="#111"
        fillRule="evenodd"
        stroke="#111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M227 18c0 7-9 13-9 13s-9-6-9-13a9 9 0 019-9 9 9 0 019 9z"
        clipRule="evenodd"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M213 14h6.818v5.909H213z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M219.818 16.273h1.818L223 17.636v2.273h-3.182v-3.636 0z"
        clipRule="evenodd"
      />
      <Circle
        cx={215.045}
        cy={21.046}
        r={1.136}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <Circle
        cx={220.954}
        cy={21.046}
        r={1.136}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <Circle cx={50} cy={195} r={6} fill="#111" />
      <Circle cx={50} cy={195} r={3} fill="#fff" />
      <Defs>
        <Pattern
          id="MapRoute_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <Use
            transform="scale(.00068 .00089)"
            xlinkHref="#MapRoute_svg__image0"
          />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgMapRoute;
