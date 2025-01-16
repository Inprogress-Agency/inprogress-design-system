import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineTarget(props) {
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
          d="M13.75 10a3.75 3.75 0 11-1.112-2.665"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
        <Path
          d="M17.424 6.757a.6.6 0 00-1.099.48l1.1-.48zM16.9 10a6.9 6.9 0 01-6.9 6.9v1.2a8.1 8.1 0 008.1-8.1h-1.2zM10 16.9A6.9 6.9 0 013.1 10H1.9a8.1 8.1 0 008.1 8.1v-1.2zM3.1 10A6.9 6.9 0 0110 3.1V1.9A8.1 8.1 0 001.9 10h1.2zM10 3.1c1.918 0 3.653.782 4.904 2.046l.853-.844A8.077 8.077 0 0010 1.9v1.2zm6.325 4.138c.37.845.575 1.779.575 2.762h1.2c0-1.152-.24-2.25-.676-3.243l-1.099.48z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M17.083 2.917l-6.666 6.666"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineTarget
