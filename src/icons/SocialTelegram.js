import * as React from 'react'
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialTelegram(props) {
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
        <Circle cx={16} cy={16.75} r={14} fill="url(#socialTelegram_svg__paint0_linear_49_5617)" />
        <Path
          d="M22.987 10.959c.124-.806-.642-1.441-1.358-1.127L7.365 16.095c-.514.225-.476 1.003.056 1.173l2.942.937c.562.179 1.17.086 1.66-.253l6.632-4.582c.2-.138.418.147.247.323l-4.774 4.922c-.463.477-.371 1.286.186 1.636l5.345 3.351c.6.376 1.37-.001 1.483-.726l1.845-11.917z"
          fill="#fff"
        />
        <Defs>
          <LinearGradient
            id="socialTelegram_svg__paint0_linear_49_5617"
            x1={16}
            y1={2.75}
            x2={16}
            y2={30.75}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#37BBFE" />
            <Stop offset={1} stopColor="#007DBB" />
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgSocialTelegram
