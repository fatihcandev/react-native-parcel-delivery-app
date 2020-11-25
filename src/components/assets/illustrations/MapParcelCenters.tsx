import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Mask,
  G,
  Defs,
  Pattern,
  Use,
} from 'react-native-svg';

function SvgMapParcelCenters(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      viewBox="0 0 328 221"
      className=""
      {...props}>
      <Path fill="#D8D8D8" d="M0 0h328v221H0z" />
      <Mask
        id="MapParcelCenters_svg__a"
        width={328}
        height={221}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse">
        <Path fill="#fff" d="M0 0h328v221H0z" />
      </Mask>
      <G mask="url(#MapParcelCenters_svg__a)">
        <Path
          fill="url(#MapParcelCenters_svg__pattern0)"
          d="M-3-22h347v264H-3z"
        />
      </G>
      <Path
        fill="#111"
        fillRule="evenodd"
        stroke="#111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M227 32c0 7-9 13-9 13s-9-6-9-13a9 9 0 019-9 9 9 0 019 9z"
        clipRule="evenodd"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M213.5 30.5L218 27l4.5 3.5V36a1 1 0 01-1 1h-7a1 1 0 01-1-1v-5.5z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M215.5 33.25a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 1.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
        clipRule="evenodd"
      />
      <Path
        fill="#111"
        fillRule="evenodd"
        stroke="#111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M35 135c0 7-9 13-9 13s-9-6-9-13a9 9 0 019-9 9 9 0 019 9z"
        clipRule="evenodd"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.5 133.5L26 130l4.5 3.5v5.5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-5.5z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M23.5 136.25a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 1.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
        clipRule="evenodd"
      />
      <Path
        fill="#111"
        fillRule="evenodd"
        stroke="#111"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M311 188c0 7-9 13-9 13s-9-6-9-13a9 9 0 019-9 9 9 0 019 9z"
        clipRule="evenodd"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M297.5 186.5l4.5-3.5 4.5 3.5v5.5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-5.5z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M299.5 189.25a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 1.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
        clipRule="evenodd"
      />
      <Defs>
        <Pattern
          id="MapParcelCenters_svg__pattern0"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox">
          <Use
            transform="matrix(.0016 0 0 .0021 0 -1.269)"
            xlinkHref="#MapParcelCenters_svg__image0"
          />
        </Pattern>
      </Defs>
    </Svg>
  );
}

export default SvgMapParcelCenters;
