import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineFaq(props) {
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
        <Path
          d="M4 4.001h16v14a2 2 0 01-2 2H6a2 2 0 01-2-2v-14z"
          stroke="#292929"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path stroke="#292929" strokeWidth={3} strokeLinejoin="round" d="M12 16h.01v.01H12z" />
        <Path
          d="M10.586 7.586c.39-.39.9-.585 1.41-.586.513-.001 1.027.194 1.418.586.39.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.414a1.993 1.993 0 01-1.418.586L12 12"
          stroke="#292929"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineFaq
