import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMultipleBubble(props) {
  const { theme } = useSelector(state => state.theme)

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
          d="M7.926 7.142a6.218 6.218 0 00-4.634 4.634c-.39 1.66-.39 3.388 0 5.048a6.218 6.218 0 004.634 4.634c1.66.39 3.388.39 5.048 0a6.218 6.218 0 004.634-4.634M7.926 7.142c1.66-.39 3.388-.39 5.048 0a6.218 6.218 0 014.634 4.634c.39 1.66.39 3.388 0 5.048M7.926 7.142a6.22 6.22 0 00-1.145.39 6.218 6.218 0 014.245-3.49c1.66-.39 3.388-.39 5.048 0a6.218 6.218 0 014.634 4.634c.39 1.66.39 3.388 0 5.048a6.219 6.219 0 01-3.49 4.245 6.22 6.22 0 00.39-1.145"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineMultipleBubble
