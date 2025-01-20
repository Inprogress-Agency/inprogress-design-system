import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgTablet(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.334 4h-12a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1zm-12-2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3h-12z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M13.334 18a1 1 0 11-2 0 1 1 0 012 0z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgTablet
