import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgBag2(props) {
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
          d="M9.2 7.738l-.201.479a4.13 4.13 0 00-.234 2.448 3.139 3.139 0 002.52 2.445l.11.02c.4.071.81.071 1.21 0l.11-.02a3.139 3.139 0 002.52-2.445 4.13 4.13 0 00-.234-2.448l-.201-.48"
          stroke="#7ACB8B"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Path
          d="M20.22 15.88a6.784 6.784 0 01-5.017 5.083c-2.101.508-4.305.508-6.405 0a6.784 6.784 0 01-5.019-5.082c-.509-2.24-.385-4.578.358-6.752l.11-.323a7.005 7.005 0 015.347-4.62l.68-.127a9.431 9.431 0 013.452 0l.68.127a7.005 7.005 0 015.347 4.62l.11.323c.744 2.174.867 4.512.358 6.752z"
          stroke="#7ACB8B"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgBag2
