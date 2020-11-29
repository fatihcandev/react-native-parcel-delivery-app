import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgDelivery(props: SvgProps) {
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
        strokeWidth={1.2}
        d="M18.259 17.405v-5.402c0-.482-.271-.928-.71-1.169l-4.963-2.7a1.48 1.48 0 00-1.418 0l-4.963 2.7a1.34 1.34 0 00-.709 1.169v5.402c0 .482.27.927.71 1.168l4.962 2.701c.44.241.98.241 1.418 0l4.964-2.701a1.34 1.34 0 00.709-1.168z"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.956 10.815a.556.556 0 00-.537.973l5.903 3.252v6.472a.556.556 0 101.11 0V15.04l5.903-3.252a.556.556 0 10-.536-.973l-5.922 3.263-5.921-3.263zM11.363 2.496a.496.496 0 01.992 0V4.48a.496.496 0 11-.992 0V2.496zm6.218 1.428a.496.496 0 01.702.701L16.88 6.028a.496.496 0 01-.701-.701l1.402-1.403zm-12.145 0a.496.496 0 000 .701L6.84 6.028a.496.496 0 10.702-.701L6.138 3.924a.496.496 0 00-.702 0z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgDelivery;
