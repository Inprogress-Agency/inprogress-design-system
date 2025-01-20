import * as React from 'react'
import Svg, { Rect, Path, Defs, RadialGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialInstagram(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Rect
          x={2}
          y={2.75}
          width={28}
          height={28}
          rx={6}
          fill="url(#socialInstagram_svg__paint0_radial_49_5623)"
        />
        <Rect
          x={2}
          y={2.75}
          width={28}
          height={28}
          rx={6}
          fill="url(#socialInstagram_svg__paint1_radial_49_5623)"
        />
        <Rect
          x={2}
          y={2.75}
          width={28}
          height={28}
          rx={6}
          fill="url(#socialInstagram_svg__paint2_radial_49_5623)"
        />
        <Path d="M23 11.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="#fff" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 21.75a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 100-6 3 3 0 000 6z"
          fill="#fff"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 16.35c0-3.36 0-5.04.654-6.324a6 6 0 012.622-2.622C10.56 6.75 12.24 6.75 15.6 6.75h.8c3.36 0 5.04 0 6.324.654a6 6 0 012.622 2.622C26 11.31 26 12.99 26 16.35v.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622c-1.284.654-2.964.654-6.324.654h-.8c-3.36 0-5.04 0-6.324-.654a6 6 0 01-2.622-2.622C6 22.19 6 20.51 6 17.15v-.8zm9.6-7.6h.8c1.713 0 2.878.002 3.778.075.877.072 1.325.202 1.638.361a4 4 0 011.748 1.748c.16.313.29.761.36 1.638.074.9.076 2.065.076 3.778v.8c0 1.713-.002 2.878-.075 3.778-.072.877-.202 1.325-.361 1.638a4 4 0 01-1.748 1.748c-.313.16-.761.29-1.638.36-.9.074-2.065.076-3.778.076h-.8c-1.713 0-2.878-.002-3.778-.075-.877-.072-1.325-.202-1.638-.361a4 4 0 01-1.748-1.748c-.16-.313-.29-.761-.36-1.638-.074-.9-.076-2.065-.076-3.778v-.8c0-1.713.002-2.878.075-3.778.072-.877.202-1.325.361-1.638a4 4 0 011.748-1.748c.313-.16.761-.29 1.638-.36.9-.074 2.065-.076 3.778-.076z"
          fill="#fff"
        />
        <Defs>
          <RadialGradient
            id="socialInstagram_svg__paint0_radial_49_5623"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-55.376 28.63 .44) scale(25.5196)"
          >
            <Stop stopColor="#B13589" />
            <Stop offset={0.793} stopColor="#C62F94" />
            <Stop offset={1} stopColor="#8A3AC8" />
          </RadialGradient>
          <RadialGradient
            id="socialInstagram_svg__paint1_radial_49_5623"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-65.136 30.353 7.264) scale(22.5942)"
          >
            <Stop stopColor="#E0E8B7" />
            <Stop offset={0.445} stopColor="#FB8A2E" />
            <Stop offset={0.715} stopColor="#E2425C" />
            <Stop offset={1} stopColor="#E2425C" stopOpacity={0} />
          </RadialGradient>
          <RadialGradient
            id="socialInstagram_svg__paint2_radial_49_5623"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(38.50003 -5.5 1.1764 8.23476 .5 3.75)"
          >
            <Stop offset={0.157} stopColor="#406ADC" />
            <Stop offset={0.468} stopColor="#6A45BE" />
            <Stop offset={1} stopColor="#6A45BE" stopOpacity={0} />
          </RadialGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgSocialInstagram
