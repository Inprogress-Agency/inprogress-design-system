import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgPlantedLocation(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M11.667 6.519c0 2.634-2.09 5.731-4.667 5.731S2.333 9.153 2.333 6.519 4.423 1.75 7 1.75s4.667 2.135 4.667 4.769z"
          stroke={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M5.542 6.125a1.458 1.458 0 112.916 0 1.458 1.458 0 01-2.916 0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgPlantedLocation
