import * as React from 'react'
import Svg, { Ellipse, Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialMsSkype(props) {
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
        <Ellipse cx={10.5} cy={10.75} rx={8.5} ry={8} fill="#184AA9" />
        <Circle cx={22} cy={22.75} r={8} fill="#2173F0" />
        <Circle cx={16} cy={16.75} r={13} fill="url(#socialMs_skype_svg__paint0_linear_49_5592)" />
        <Path
          d="M16.069 9.75c2.113 0 4.931 1 4.227 2.333-.963 1.823-2.818 0-4.227 0-1.41 0-2.114.667-2.114 1.334 0 .666.353 1.333 2.114 2 1.76.666 4.931 1.666 4.931 4.333 0 2.667-2.466 4-5.636 4-2.84 0-4.93-1.333-4.227-2.667.81-1.533 2.818.334 4.227.334 1.41 0 2.818-.334 2.818-1.667s-2.113-1.667-3.522-2.333c-1.761-.834-3.523-1.667-3.523-4 0-2.334 2.818-3.667 4.932-3.667z"
          fill="#fff"
        />
        <Defs>
          <LinearGradient
            id="socialMs_skype_svg__paint0_linear_49_5592"
            x1={5.889}
            y1={8.806}
            x2={25.389}
            y2={25.056}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#297AC0" />
            <Stop offset={1} stopColor="#48B0F9" />
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgSocialMsSkype
