import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function SvgLineExit(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <G
          filter="url(#lineExit_svg__filter0_di_3791_32091)"
          fill="#fff"
          clipPath="url(#lineExit_svg__clip0_3791_32091)"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.109 4.326c-.539.502-.539 1.42-.539 3.253v8.837c0 1.834 0 2.752.539 3.253.538.502 1.362.351 3.009.05l1.774-.325c1.824-.334 2.736-.502 3.277-1.204.542-.703.542-1.719.542-3.751V9.557c0-2.032 0-3.048-.54-3.751-.543-.702-1.456-.87-3.28-1.203l-1.773-.325c-1.646-.302-2.47-.452-3.008.05l-.001-.002zm1.746 6.207c.316 0 .572.28.572.627v1.675c0 .346-.256.627-.572.627-.315 0-.57-.28-.57-.627V11.16c0-.346.255-.627.57-.627z"
          />
          <Path d="M8.464 5.999c-1.568.002-2.385.038-2.906.585C5 7.17 5 8.112 5 9.998v4c0 1.885 0 2.827.558 3.413.52.546 1.338.583 2.906.586-.036-.5-.036-1.075-.036-1.698V7.697c0-.624 0-1.2.036-1.698z" />
        </G>
        <Defs>
          <ClipPath id="lineExit_svg__clip0_3791_32091">
            <Path fill="#fff" transform="matrix(-1 0 0 1 24 0)" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgLineExit
