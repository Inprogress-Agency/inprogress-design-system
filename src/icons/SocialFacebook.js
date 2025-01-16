import * as React from 'react'
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialFacebook(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Circle cx={16} cy={16} r={14} fill="url(#socialFacebook_svg__paint0_linear_602_3296)" />
        <Path
          d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
          fill="#fff"
        />
        <Defs>
          <LinearGradient
            id="socialFacebook_svg__paint0_linear_602_3296"
            x1={16}
            y1={2}
            x2={16}
            y2={29.917}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#18ACFE" />
            <Stop offset={1} stopColor="#0163E0" />
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgSocialFacebook
