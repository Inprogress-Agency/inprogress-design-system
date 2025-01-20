import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineSeed(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M12.917 8.974l.155.966.692-.691A5.98 5.98 0 0117.997 7.5h2.501a1.5 1.5 0 011.5 1.5v.5a6 6 0 01-6 6h-3V20a.5.5 0 01-1 0v-7.5h-2.5a6.5 6.5 0 01-6.5-6.5V5a1.5 1.5 0 011.5-1.5h2s0 0 0 0a6.502 6.502 0 016.42 5.474zM12.998 14v.5h3a5 5 0 005-5 1 1 0 00-1-1h-2a5 5 0 00-5 5v.5zm-1.5-2.5h.5V10a5.5 5.5 0 00-5.5-5.5h-1a1.5 1.5 0 00-1.5 1.5 5.5 5.5 0 005.5 5.5h2z"
          fill={props.color || theme?.colors?.black || '#212121'}
          stroke={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineSeed
