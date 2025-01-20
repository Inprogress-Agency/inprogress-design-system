import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineExit2(props) {
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
          d="M8 4H5a2 2 0 00-2 2v1m5 13H5a2 2 0 01-2-2v-1m4.999-5h-5m0 0l2-2m-2 2l2 2m14.576 5.428l-6 1.8A2 2 0 0111 19.312V4.688a2 2 0 012.575-1.916l6 1.8A2 2 0 0121 6.488v11.024a2 2 0 01-1.425 1.916z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineExit2
