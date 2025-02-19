import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgDarkmode(props) {
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
          d="M7.154 5.942c0-1.547.227-3.11.808-4.442C4.103 3.18 1.5 7.12 1.5 11.596 1.5 17.618 6.382 22.5 12.404 22.5c4.476 0 8.416-2.603 10.096-6.462-1.332.58-2.897.808-4.442.808-6.022 0-10.904-4.882-10.904-10.904z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgDarkmode
