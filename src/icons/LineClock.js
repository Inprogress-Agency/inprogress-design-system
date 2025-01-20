import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineClock(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M2.794 7.459A6.26 6.26 0 017.46 2.794a11.128 11.128 0 015.082 0 6.26 6.26 0 014.665 4.665 11.128 11.128 0 010 5.082 6.26 6.26 0 01-4.665 4.665 11.128 11.128 0 01-5.082 0 6.26 6.26 0 01-4.665-4.665 11.128 11.128 0 010-5.082z"
          stroke={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M12.083 12.083l-2.365-1.505V7.5"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineClock
