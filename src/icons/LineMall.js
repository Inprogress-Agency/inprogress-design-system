import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineMall(props) {
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
          d="M4 22V3a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v19m0-14.5l5 3V22"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2 22h20"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineMall
