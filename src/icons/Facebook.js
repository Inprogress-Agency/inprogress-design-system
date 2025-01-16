import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgFacebook(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Rect width={118.35} height={118.35} x={4.83} y={4.83} fill="#3d5a98" rx={6.53} ry={6.53} />
        <Path
          fill="#fff"
          d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
        />
      </G>
    </Svg>
  )
}
export default SvgFacebook
