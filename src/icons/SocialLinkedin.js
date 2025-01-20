import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialLinkedin(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Rect x={2} y={2.75} width={28} height={28} rx={14} fill="#1275B1" />
        <Path
          d="M12.619 10.442c0 .935-.81 1.692-1.81 1.692-.999 0-1.809-.757-1.809-1.692 0-.934.81-1.692 1.81-1.692.998 0 1.809.758 1.809 1.692zM9.247 13.378h3.093v9.372H9.247v-9.372zM17.32 13.378h-3.093v9.372h3.093v-4.795c0-1.107.378-2.22 1.886-2.22 1.705 0 1.695 1.45 1.687 2.572-.01 1.467.014 2.965.014 4.443H24v-4.946c-.026-3.159-.85-4.614-3.557-4.614-1.608 0-2.604.73-3.123 1.39v-1.202z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialLinkedin
