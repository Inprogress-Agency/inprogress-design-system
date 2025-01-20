import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgQrcodeRightLeaf(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="200pt"
      height="200pt"
      viewBox="0 0 200 200"
      {...props}
    >
      <G scale={1}>
        <Path
          stroke={props.color || theme?.colors?.black || '#212121'}
          fill="#7ACB8B"
          d="M100 50h50v50l-50 50H50v-50"
        />
        <Path d="M150 100c0 27.613-22.387 50-50 50s-50-22.387-50-50 22.387-50 50-50 50 22.387 50 50" />
      </G>
    </Svg>
  )
}
export default SvgQrcodeRightLeaf
