import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgTooltipPointer(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M15.056 0c.84 0 1.26 1.136.666 1.8L8.667 9.69a.874.874 0 01-1.333 0L.277 1.8C-.316 1.136.105 0 .944 0h14.112z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgTooltipPointer
