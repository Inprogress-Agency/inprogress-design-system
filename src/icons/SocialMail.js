import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialMail(props) {
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
          d="M20.4 2.75h-8.8c-3.36 0-5.04 0-6.324.654a6 6 0 00-2.622 2.622C2 7.31 2 8.99 2 12.35v8.8c0 3.36 0 5.04.654 6.324a6 6 0 002.622 2.622c1.284.654 2.964.654 6.324.654h8.8c3.36 0 5.04 0 6.324-.654a6 6 0 002.622-2.622C30 26.19 30 24.51 30 21.15v-8.8c0-3.36 0-5.04-.654-6.324a6 6 0 00-2.622-2.622C25.44 2.75 23.76 2.75 20.4 2.75z"
          fill="#fff"
        />
        <Path
          d="M20.4 2.75h-8.8c-3.36 0-5.04 0-6.324.654a6 6 0 00-2.622 2.622C2 7.31 2 8.99 2 12.35v8.8c0 3.36 0 5.04.654 6.324a6 6 0 002.622 2.622c1.284.654 2.964.654 6.324.654h8.8c3.36 0 5.04 0 6.324-.654a6 6 0 002.622-2.622C30 26.19 30 24.51 30 21.15v-8.8c0-3.36 0-5.04-.654-6.324a6 6 0 00-2.622-2.622C25.44 2.75 23.76 2.75 20.4 2.75z"
          fill="url(#socialMail_svg__paint0_linear_165_12563)"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.69 18.458l-1.248-1.249-5.719 5.719c.028.017.057.032.086.047.3.153.691.153 1.475.153h15.431c.785 0 1.177 0 1.476-.153.03-.015.058-.03.086-.047l-5.719-5.719-1.248 1.249a3.252 3.252 0 01-2.31.957 3.257 3.257 0 01-2.31-.957zm12.066 3.99l.047-.085c.152-.3.152-.691.152-1.475v-8.276c0-.784 0-1.176-.152-1.475a1.419 1.419 0 00-.062-.11l-5.704 5.704 5.719 5.718zM25.3 10.588a1.369 1.369 0 00-.11-.062c-.3-.153-.691-.153-1.476-.153H8.285c-.785 0-1.177 0-1.476.153-.038.019-.074.04-.11.062l7.431 7.43a2.632 2.632 0 002.375.727c.5-.097.978-.339 1.365-.726l7.43-7.431zm-19.042.44l5.704 5.704-5.719 5.718a1.352 1.352 0 01-.047-.086c-.153-.3-.153-.691-.153-1.475v-8.276c0-.784 0-1.176.153-1.475.02-.038.04-.075.062-.11z"
          fill="url(#socialMail_svg__paint1_linear_165_12563)"
        />
        <Defs>
          <LinearGradient
            id="socialMail_svg__paint0_linear_165_12563"
            x1={16}
            y1={2.75}
            x2={16}
            y2={30.75}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#1A6AE7" />
            <Stop offset={1} stopColor="#20C2F4" />
          </LinearGradient>
          <LinearGradient
            id="socialMail_svg__paint1_linear_165_12563"
            x1={16}
            y1={10.372}
            x2={16}
            y2={23.128}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#F7F7F7" />
            <Stop offset={1} stopColor="#F9F9F9" />
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgSocialMail
