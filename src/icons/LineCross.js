import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineCross(props) {
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
          d="M14.937 6.212a1 1 0 01-1.126 1.653A5 5 0 1016 12.001a1 1 0 012 0 7 7 0 11-3.063-5.789z"
          fill="#fff"
        />
        <Path
          d="M14.539 14.507a.998.998 0 01-1.524-.667 1 1 0 01.446-1.018l3.482-2.227a1 1 0 011.077 1.685l-3.481 2.227z"
          fill="#fff"
        />
        <Path
          d="M19.903 14.411a1 1 0 01-1.826.815l-1.508-3.38a1 1 0 111.826-.815l1.508 3.38z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}
export default SvgLineCross
