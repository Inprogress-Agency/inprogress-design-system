import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgAdd(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path d="M22 28h12m-6-6v12" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" />
      </G>
    </Svg>
  )
}
export default SvgAdd
