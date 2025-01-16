import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMenu(props) {
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
          d="M3.297 5.234a2.599 2.599 0 011.937-1.937v0a5.544 5.544 0 012.532 0v0a2.599 2.599 0 011.937 1.937v0c.195.833.195 1.7 0 2.532v0a2.599 2.599 0 01-1.937 1.937v0c-.833.195-1.7.195-2.532 0v0a2.599 2.599 0 01-1.937-1.937v0a5.545 5.545 0 010-2.532v0zM3.297 16.234a2.599 2.599 0 011.937-1.937v0a5.546 5.546 0 012.532 0v0a2.599 2.599 0 011.937 1.937v0c.195.833.195 1.7 0 2.532v0a2.599 2.599 0 01-1.937 1.937v0c-.833.195-1.7.195-2.532 0v0a2.599 2.599 0 01-1.937-1.937v0a5.545 5.545 0 010-2.532v0zM14.297 5.234a2.599 2.599 0 011.937-1.937v0a5.544 5.544 0 012.532 0v0a2.599 2.599 0 011.937 1.937v0c.195.833.195 1.7 0 2.532v0a2.599 2.599 0 01-1.937 1.937v0c-.833.195-1.7.195-2.532 0v0a2.599 2.599 0 01-1.937-1.937v0a5.546 5.546 0 010-2.532v0zM14.297 16.234a2.599 2.599 0 011.937-1.937v0a5.546 5.546 0 012.532 0v0a2.599 2.599 0 011.937 1.937v0c.195.833.195 1.7 0 2.532v0a2.599 2.599 0 01-1.937 1.937v0c-.833.195-1.7.195-2.532 0v0a2.599 2.599 0 01-1.937-1.937v0a5.546 5.546 0 010-2.532v0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineMenu
