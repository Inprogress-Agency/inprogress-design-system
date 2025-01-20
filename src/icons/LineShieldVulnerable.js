import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineShieldVulnerable(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M15.875 20.237l.18-.124c.566-.391.849-.587 1.101-.796a7.495 7.495 0 002.603-4.476c.056-.323.086-.664.144-1.346l.03-.353a17.996 17.996 0 00-.028-3.392l-.036-.349a5.75 5.75 0 00-3.205-4.574 10.642 10.642 0 00-9.328 0A5.75 5.75 0 004.13 9.4l-.036.35a17.993 17.993 0 00-.029 3.391l.03.353c.06.682.089 1.023.145 1.346a7.495 7.495 0 002.603 4.476c.253.21.535.405 1.1.796l.18.124c.769.532 1.153.797 1.538.982a5.41 5.41 0 004.676 0c.385-.185.77-.45 1.537-.982z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
        <Path
          d="M13.768 10.982l-3.536 3.536m3.536 0l-3.536-3.536"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineShieldVulnerable
