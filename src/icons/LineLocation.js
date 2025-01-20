import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineLocation(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M16.667 9.313c0 3.763-2.985 8.187-6.667 8.187s-6.667-4.424-6.667-8.187C3.333 5.55 6.319 2.5 10 2.5s6.667 3.05 6.667 6.813z"
          stroke="#3C3F42"
          strokeWidth={1.5}
        />
        <Path
          d="M7.917 8.75a2.083 2.083 0 114.166 0 2.083 2.083 0 01-4.167 0z"
          stroke="#3C3F42"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineLocation
