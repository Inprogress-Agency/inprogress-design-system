import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineBuilding(props) {
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
          d="M12.5 22H4.08c-1.16 0-2.11-.93-2.11-2.07V5.09c0-2.62 1.95-3.81 4.34-2.64l4.44 2.18c.96.47 1.75 1.72 1.75 2.78V22zM21.97 15.06v3.78c0 2.16-1 3.16-3.16 3.16H12.5V10.42l.47.1 4.5 1.01 2.03.45c1.32.29 2.4.97 2.46 2.89.01.06.01.12.01.19zM5.5 9h3.47M5.5 13h3.47"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17.47 11.53v3.22c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-4.23l4.5 1.01zM21.96 14.87A2.249 2.249 0 0119.72 17c-1.24 0-2.25-1.01-2.25-2.25v-3.22l2.03.45c1.32.29 2.4.97 2.46 2.89z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineBuilding
