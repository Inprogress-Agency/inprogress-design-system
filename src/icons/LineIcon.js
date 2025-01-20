import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineIcon(props) {
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
          d="M21 9.144V4.866C21 3.537 20.398 3 18.901 3H15.1C13.602 3 13 3.537 13 4.866v4.268c0 1.338.602 1.866 2.099 1.866H18.9c1.497.01 2.099-.528 2.099-1.856zM21 18.901V15.1C21 13.602 20.398 13 18.901 13H15.1C13.602 13 13 13.602 13 15.099V18.9c0 1.497.602 2.099 2.099 2.099H18.9C20.398 21 21 20.398 21 18.901zM11 9.144V4.866C11 3.537 10.398 3 8.901 3H5.1C3.602 3 3 3.537 3 4.866v4.268C3 10.472 3.602 11 5.099 11H8.9c1.497.01 2.099-.528 2.099-1.856zM11 18.901V15.1C11 13.602 10.398 13 8.901 13H5.1C3.602 13 3 13.602 3 15.099V18.9C3 20.398 3.602 21 5.099 21H8.9C10.398 21 11 20.398 11 18.901z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineIcon
