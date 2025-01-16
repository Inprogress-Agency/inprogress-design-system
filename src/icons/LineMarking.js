import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMarking(props) {
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
          d="M15.25 12a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M21 12h-3M3 12h3M12 21v-3m0-15v3M12 3v3M12 21v-3"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineMarking
