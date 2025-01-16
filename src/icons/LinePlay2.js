import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLinePlay2(props) {
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
        <Path
          d="M3.688 9.068a7.22 7.22 0 015.38-5.38v0a12.837 12.837 0 015.864 0v0a7.22 7.22 0 015.38 5.38v0a12.839 12.839 0 010 5.864v0a7.22 7.22 0 01-5.38 5.38v0a12.839 12.839 0 01-5.864 0v0a7.22 7.22 0 01-5.38-5.38v0a12.837 12.837 0 010-5.864v0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M14.162 10.87c.784.503.784 1.757 0 2.26l-2.647 1.693c-.785.502-1.765-.125-1.765-1.129v-3.388c0-1.004.98-1.631 1.765-1.13l2.647 1.695z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLinePlay2
