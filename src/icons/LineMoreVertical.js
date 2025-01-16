import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMoreVertical(props) {
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
          d="M10 19c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM10 5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM10 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineMoreVertical
