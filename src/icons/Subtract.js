import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSubtract(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.667 7A6.667 6.667 0 11.334 7a6.667 6.667 0 0113.333 0zm-6.666-.666c.368 0 .666.298.666.667v3.334a.667.667 0 01-1.333 0V7c0-.369.298-.667.667-.667zm0-1.333a.667.667 0 100-1.334.667.667 0 000 1.334z"
          fill="#8E8E95"
        />
      </G>
    </Svg>
  )
}
export default SvgSubtract
