import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineLink(props) {
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
          d="M18.285 14.742a.638.638 0 01-.915 0 .64.64 0 010-.916c1.778-1.779 1.778-4.67 0-6.44-1.778-1.77-4.668-1.779-6.437 0-1.769 1.78-1.778 4.67 0 6.44a.64.64 0 010 .916.638.638 0 01-.915 0c-2.285-2.286-2.285-6.004 0-8.28 2.284-2.278 6-2.287 8.276 0a5.868 5.868 0 01-.009 8.28z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M5.715 10.758a.638.638 0 01.915 0 .64.64 0 010 .916c-1.778 1.779-1.778 4.67 0 6.44 1.778 1.77 4.668 1.779 6.437 0 1.769-1.78 1.778-4.67 0-6.44a.64.64 0 010-.916.638.638 0 01.915 0c2.285 2.286 2.285 6.004 0 8.28-2.284 2.278-6 2.287-8.276 0a5.868 5.868 0 01.009-8.28z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineLink
