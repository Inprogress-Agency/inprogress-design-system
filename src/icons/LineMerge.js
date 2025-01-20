import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMerge(props) {
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
          d="M2.274 6.628a5.842 5.842 0 014.354-4.354 10.386 10.386 0 014.744 0 5.842 5.842 0 014.354 4.354c.365 1.56.365 3.184 0 4.744a5.842 5.842 0 01-4.354 4.354c-1.56.365-3.184.365-4.744 0a5.842 5.842 0 01-4.354-4.354 10.386 10.386 0 010-4.744z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M8.274 12.628a5.842 5.842 0 014.354-4.354 10.386 10.386 0 014.744 0 5.842 5.842 0 014.354 4.354c.366 1.56.366 3.184 0 4.744a5.842 5.842 0 01-4.354 4.354c-1.56.366-3.184.366-4.744 0a5.842 5.842 0 01-4.354-4.354 10.386 10.386 0 010-4.744z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineMerge
