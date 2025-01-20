import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineStarShield(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M12 6.364C12 9.895 9.44 13.198 6 14c-3.44-.802-6-4.105-6-7.636V2.545L6 0l6 2.545v3.819zm-6 6.363c2.5-.636 4.667-3.474 4.667-6.223V3.373L6 1.387 1.333 3.373v3.13c0 2.75 2.167 5.588 4.667 6.224zm2.033-3.182L5.98 8.368 3.933 9.545l.54-2.227L2.667 5.83l2.386-.197.927-2.1.933 2.093 2.387.198-1.813 1.495.546 2.227z"
          fill="url(#lineStarShield_svg__paint0_linear_19518_2076)"
        />
        <Defs>
          <LinearGradient
            id="lineStarShield_svg__paint0_linear_19518_2076"
            x1={12}
            y1={7}
            x2={0}
            y2={7}
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
export default SvgLineStarShield
