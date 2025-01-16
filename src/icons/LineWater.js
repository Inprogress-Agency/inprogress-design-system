import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineWater(props) {
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
          d="M18.75 15c0 4.142-2.608 6.75-6.75 6.75-4.142 0-6.75-2.608-6.75-6.75 0-4.445 4.839-10.446 6.323-12.182a.562.562 0 01.854 0C13.912 4.554 18.75 10.555 18.75 15z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
        <Path
          d="M16.125 15.375a3.375 3.375 0 01-3.375 3.375"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineWater
