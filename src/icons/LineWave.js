import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Rect } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineWave(props) {
  const { theme } = useSelector(state => state.theme)

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
        <Rect
          y={4.5}
          width={6}
          height={15}
          rx={3}
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Rect
          x={9}
          width={6}
          height={24}
          rx={3}
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Rect
          x={18}
          y={4.5}
          width={6}
          height={15}
          rx={3}
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineWave
