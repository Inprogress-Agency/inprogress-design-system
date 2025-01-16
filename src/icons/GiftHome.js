import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgGiftHome(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path opacity={0.4} d="M39.94 20v16c0 6-2 8-8 8h-16c-6 0-8-2-8-8V20h32z" fill="#fff" />
        <Path
          d="M43 14v2c0 2.2-1.06 4-4 4H9c-3.06 0-4-1.8-4-4v-2c0-2.2.94-4 4-4h30c2.94 0 4 1.8 4 4z"
          fill="#fff"
        />
        <Path
          opacity={0.4}
          d="M23.28 10H12.24c-.68-.74-.66-1.88.06-2.6l2.84-2.84a1.92 1.92 0 012.7 0L23.28 10zM35.74 10H24.7l5.44-5.44a1.92 1.92 0 012.7 0l2.84 2.84c.72.72.74 1.86.06 2.6z"
          fill="#fff"
        />
        <Path
          opacity={0.6}
          d="M17.88 20v10.28c0 1.6 1.76 2.54 3.1 1.68l1.88-1.24c.68-.44 1.54-.44 2.2 0l1.78 1.2c1.32.88 3.1-.06 3.1-1.66V20H17.88z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}
export default SvgGiftHome
