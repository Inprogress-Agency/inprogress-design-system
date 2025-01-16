import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineSliderVertical(props) {
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
          d="M6.5 2h11m-11 20h11M3.424 15.554l.048.167c.486 1.68 1.904 2.952 3.665 3.287 3.18.604 6.45.604 9.63 0 1.76-.335 3.178-1.606 3.665-3.287l.048-.167c.629-2.173.629-4.474 0-6.647l-.048-.167c-.487-1.68-1.904-2.952-3.665-3.287a25.789 25.789 0 00-9.63 0C5.376 5.788 3.958 7.06 3.472 8.74l-.048.167a11.945 11.945 0 000 6.647z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineSliderVertical
