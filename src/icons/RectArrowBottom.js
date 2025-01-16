import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgRectArrowBottom(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M0 2.02C0 .96.947.148 1.996.312L16 2.5 30.004.312a1.729 1.729 0 11.534 3.416L16 6 1.462 3.728A1.729 1.729 0 010 2.02z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgRectArrowBottom
