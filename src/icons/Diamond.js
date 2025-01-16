import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgDiamond(props) {
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
        <Path d="M12 1.5l9.743 5.625v11.25L12 24l-9.743-5.625V7.125L12 1.5z" fill="#1A96F0" />
        <Path d="M3.45 7.913L12 3.075v5.4l-3.6 2.138-4.95-2.7z" fill="#fff" />
      </G>
    </Svg>
  )
}
export default SvgDiamond
