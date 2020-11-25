import * as React from 'react';
import Svg, { SvgProps, Mask, Path, G } from 'react-native-svg';

function SvgEnvelope(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 66 99"
      className=""
      {...props}>
      <Mask
        id="Envelope_svg__a"
        width={65}
        height={34}
        x={1}
        y={33}
        maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M1 33.657h64.972v32.487H1V33.657z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#Envelope_svg__a)">
        <Path
          fill="#B5B5B5"
          fillRule="evenodd"
          d="M1.176 44.056l20.621-10.31a1.07 1.07 0 01.851 0l43.15 21.574c.019.01.034.02.05.03l-.079-.116.203-.028v.315c.006.08-.05.162-.174.224l-20.621 10.31a1.071 1.071 0 01-.851 0L1.176 44.482c-.235-.117-.235-.308 0-.425z"
          clipRule="evenodd"
        />
      </G>
      <Mask
        id="Envelope_svg__b"
        width={65}
        height={33}
        x={1}
        y={33}
        maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M1.005 33.33h64.969v32.488H1.004V33.33z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#Envelope_svg__b)">
        <Path
          fill="#F2F2F2"
          fillRule="evenodd"
          d="M65.798 55.42L45.176 65.73a1.069 1.069 0 01-.85 0L1.175 44.154c-.235-.118-.222-.314 0-.426l20.621-10.31c.235-.117.616-.117.851 0l43.15 21.575c.235.117.235.308 0 .425z"
          clipRule="evenodd"
        />
      </G>
      <Path
        fill="#B5B5B5"
        fillRule="evenodd"
        d="M18.873 41.704L56.065 60.3l.17-.085-37.191-18.596-.17.085z"
        clipRule="evenodd"
      />
      <Mask
        id="Envelope_svg__c"
        width={30}
        height={16}
        x={1}
        y={33}
        maskUnits="userSpaceOnUse">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M1 33.52h29.013v14.491H1v-14.49z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#Envelope_svg__c)">
        <Path
          fill="#B5B5B5"
          fillRule="evenodd"
          d="M29.807 38.315l-7.11-4.681c-.51-.255-.851 0-.851 0l-10.307 5.153L1.23 43.941s-.114-.132-.18-.064l-.046-.038L1 44.27c.003.062.066.013.231.096l9.893 3.533c.477.17 1.132.143 1.547-.064l8.482-4.241 8.482-4.242c.415-.207.513-.8.172-1.038z"
          clipRule="evenodd"
        />
      </G>
      <Path
        fill="#F2F2F2"
        fillRule="evenodd"
        d="M21.846 33.336L11.54 38.49 1.23 43.642s-.51.17 0 .426l9.893 3.533c.477.17 1.132.143 1.547-.064l8.482-4.241 8.482-4.241c.415-.208.47-.535.128-.774l-7.066-4.946c-.51-.255-.85 0-.85 0z"
        clipRule="evenodd"
      />
      <Path
        fill="#B3B3B3"
        fillRule="evenodd"
        d="M21.73 41.612a.484.484 0 010 .882c-.379.19-.993.19-1.371 0a.484.484 0 010-.882c.378-.189.992-.189 1.37 0z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M21.73 41.612c.378.19.378.497 0 .686-.379.19-.993.19-1.371 0-.379-.19-.379-.496 0-.686.378-.189.992-.189 1.37 0z"
        clipRule="evenodd"
      />
      <Path
        fill="#111"
        fillRule="evenodd"
        d="M11.334 46.066l-4.385-2.202c-.106-.053-.106-.14 0-.193l6.114-3.057a.486.486 0 01.386 0l4.385 2.202c.106.053.106.139 0 .193l-6.115 3.057a.486.486 0 01-.385 0z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M17.529 43.009l-5.81 2.904a.487.487 0 01-.385 0l-4.08-2.05c-.107-.052-.107-.139 0-.192l5.81-2.905a.487.487 0 01.385 0l4.08 2.05c.107.053.107.14 0 .193z"
        clipRule="evenodd"
      />
      <Path
        fill="#2C323D"
        fillRule="evenodd"
        d="M12.892 41.353L7.897 43.85l-.138-.069 4.995-2.497.138.069zm.326.162l-4.995 2.498-.138-.069 4.995-2.497.138.068zm.325.163l-4.995 2.498-.138-.07 4.995-2.497.138.07zm.326.163l-4.995 2.498-.138-.07 4.995-2.497.138.069zm.325.163L9.2 44.5l-.138-.069 4.995-2.497.138.069zm2.091.42l-3.148 1.574-.138-.068 3.149-1.575.137.07zm.325.163l-3.148 1.574-.137-.069 3.148-1.574.138.069zm.326.163l-3.148 1.574-.138-.069 3.149-1.574.137.069z"
        clipRule="evenodd"
      />
      <Path
        fill="#111"
        fillRule="evenodd"
        d="M15.348 42.004l-5.687 2.844.073.037 5.688-2.844-.074-.037z"
        clipRule="evenodd"
      />
      <Path
        fill="#2C323D"
        fillRule="evenodd"
        d="M55.596 58.299l-3.174-1.587c-.107-.054-.107-.14 0-.194l6.163-3.082a.49.49 0 01.389 0l3.173 1.587c.107.054.107.14 0 .195l-6.162 3.08a.488.488 0 01-.39 0z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M61.84 55.218l-5.855 2.927a.49.49 0 01-.39 0l-2.865-1.433c-.108-.054-.108-.14 0-.194l5.855-2.928a.49.49 0 01.389 0l2.866 1.433c.107.054.107.141 0 .195z"
        clipRule="evenodd"
      />
      <Path
        fill="#2C323D"
        fillRule="evenodd"
        d="M56.148 57.725l-.225.113-2.559-1.28.225-.112 2.56 1.28zm1.342-.67l-.226.113-2.559-1.28.225-.113 2.56 1.28zm.158-.079l-.072.035-2.559-1.28.072-.035 2.559 1.28zm.148-.075l-.071.036-2.56-1.28.072-.035 2.56 1.28zm.748-.373l-.072.036-2.56-1.28.073-.036 2.559 1.28zm-2.15 1.074l-.113.057-2.559-1.28.113-.056 2.559 1.28zm1.736-.867l-.226.113-2.56-1.28.226-.112 2.56 1.28zm.245-.123l-.113.057-2.559-1.28.113-.056 2.559 1.28zm-1.735.868l-.113.056-2.559-1.28.113-.056 2.559 1.28zm.245-.123l-.112.056-2.56-1.28.113-.056 2.56 1.28zm.246-.123l-.113.056-2.559-1.28.113-.055 2.56 1.28zm1.305-3.212l.225-.112 2.56 1.28-.226.112-2.559-1.28zm-1.341.671l.226-.113 2.559 1.28-.226.113-2.559-1.28zm-.158.079l.071-.035 2.56 1.28-.072.035-2.56-1.28zm-.149.074l.072-.035 2.559 1.28-.072.035-2.559-1.28zm-.748.374l.073-.036 2.559 1.28-.072.036-2.56-1.28zm2.15-1.075l.113-.056 2.56 1.28-.114.056-2.559-1.28zm-1.735.868l.226-.113 2.559 1.28-.225.112-2.56-1.28zm-.245.123l.112-.057 2.56 1.28-.113.056-2.56-1.28zm1.735-.868l.112-.056 2.56 1.28-.113.056-2.56-1.28zm-.245.122l.112-.055 2.559 1.28-.113.055-2.559-1.28zm-.247.124l.113-.057 2.56 1.28-.113.056-2.56-1.28z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default SvgEnvelope;
