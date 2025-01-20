import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Rect } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgQrcodeRounded(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 200 200"
      {...props}
    >
      <G scale={1}>
        <Rect
          x={50}
          y={50}
          width={100}
          height={100}
          rx={20}
          ry={20}
          stroke={props.color || theme?.colors?.black || '#212121'}
          fill="#7ACB8B"
        />
      </G>
    </Svg>
  )
}
export default SvgQrcodeRounded
