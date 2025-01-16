import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Ellipse } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgUser(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Ellipse
          cx={20}
          cy={10.611}
          rx={8.333}
          ry={8.611}
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Ellipse
          cx={20}
          cy={30.13}
          rx={15}
          ry={8.611}
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgUser
