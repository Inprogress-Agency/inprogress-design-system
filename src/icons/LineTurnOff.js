import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineTurnOff(props) {
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
          d="M18.364 5.364a9.212 9.212 0 012.463 4.69 9.31 9.31 0 01-.512 5.292A9.126 9.126 0 0117 19.456 8.889 8.889 0 0112 21c-1.78 0-3.52-.537-5-1.544a9.126 9.126 0 01-3.315-4.11 9.31 9.31 0 01-.512-5.292 9.21 9.21 0 012.463-4.69M12 3v4.727"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineTurnOff
