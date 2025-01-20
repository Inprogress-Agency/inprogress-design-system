import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineTrophy(props) {
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
          d="M7 4.5C7 3.28 8 3 9 3h5c1.5 0 3 0 3 1.5m-10 0v7m0-7H6c-1.325 0-2 .241-2 1.5v2.5c0 2.73 3 3 3 3m0 0c0 2.234 3 3.5 5 3.5m0 0c2 0 5-2 5-3.5M12 15v3m5-6.5v-7m0 7s3-.685 3-3V6s0-1.5-2-1.5h-1M12 18h-1c-4 0-5 3-4 3h10c.62 0 0-3-4-3h-1z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineTrophy
