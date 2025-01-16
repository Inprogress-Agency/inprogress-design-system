import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineRefresh(props) {
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
          d="M20 12c0 4.416-3.584 8-8 8s-7.112-4.448-7.112-4.448m0 0h3.616m-3.616 0v4M4 12c0-4.416 3.552-8 8-8 5.336 0 8 4.448 8 4.448m0 0v-4m0 4h-3.552"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineRefresh
