import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLinePlay(props) {
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
          d="M3.688 9.806a7.22 7.22 0 015.38-5.38v0a12.837 12.837 0 015.864 0v0a7.22 7.22 0 015.38 5.38v0a12.839 12.839 0 010 5.863v0a7.22 7.22 0 01-5.38 5.381v0a12.836 12.836 0 01-5.864 0v0a7.22 7.22 0 01-5.38-5.38v0a12.837 12.837 0 010-5.864v0z"
          stroke="#7ACB8B"
          strokeWidth={1.5}
        />
        <Path
          d="M14.162 11.609c.784.502.784 1.756 0 2.258l-2.647 1.694c-.785.502-1.765-.125-1.765-1.13v-3.387c0-1.004.98-1.631 1.765-1.13l2.647 1.695z"
          stroke="#7ACB8B"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLinePlay
