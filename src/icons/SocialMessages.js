import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialMessages(props) {
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
        <Path
          d="M2 12.35c0-3.36 0-5.04.654-6.324a6 6 0 012.622-2.622C6.56 2.75 8.24 2.75 11.6 2.75h8.8c3.36 0 5.04 0 6.324.654a6 6 0 012.622 2.622C30 7.31 30 8.99 30 12.35v8.8c0 3.36 0 5.04-.654 6.324a6 6 0 01-2.622 2.622c-1.284.654-2.964.654-6.324.654h-8.8c-3.36 0-5.04 0-6.324-.654a6 6 0 01-2.622-2.622C2 26.19 2 24.51 2 21.15v-8.8z"
          fill="url(#socialMessages_svg__paint0_linear_49_5589)"
        />
        <Path
          d="M16 23.75c4.97 0 9-3.358 9-7.5 0-4.142-4.03-7.5-9-7.5s-9 3.358-9 7.5c0 2.625 1.619 4.936 4.07 6.276-.082.667-.329 1.557-1.07 2.224 1.402-.252 2.521-.76 3.357-1.329.836.214 1.723.329 2.643.329z"
          fill="#fff"
        />
        <Defs>
          <LinearGradient
            id="socialMessages_svg__paint0_linear_49_5589"
            x1={16}
            y1={2.75}
            x2={16}
            y2={30.75}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#5AF575" />
            <Stop offset={1} stopColor="#13BD2C" />
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgSocialMessages
