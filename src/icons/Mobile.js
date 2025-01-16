import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgMobile(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2H3a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1h-1a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 014 2zm7-2a3 3 0 013 3v14a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h8z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgMobile
