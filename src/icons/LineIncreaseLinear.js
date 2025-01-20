import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineIncreaseLinear(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M15.077 8.43H20m0 0v4.923m0-4.923l-6.954 6.954a.616.616 0 01-.861 0l-2.831-2.83a.616.616 0 00-.862 0L4 17.045"
          stroke="url(#lineIncreaseLinear_svg__paint0_linear_10207_6872)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Defs>
          <LinearGradient
            id="lineIncreaseLinear_svg__paint0_linear_10207_6872"
            x1={20}
            y1={12.738}
            x2={4}
            y2={12.738}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7A4BFF" />
            <Stop offset={1} stopColor="#FF5F4A" />
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgLineIncreaseLinear
