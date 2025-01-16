import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgQrcodeLeftLeaf(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="200pt"
      height="200pt"
      viewBox="0 0 200 200"
      {...props}
    >
      <G scale={1}>
        <Path d="M50 50h50l50 50v50h-50l-50-50" />
        <Path
          stroke="#000"
          fill="#7ACB8B"
          d="M150 100c0 27.613-22.387 50-50 50s-50-22.387-50-50 22.387-50 50-50 50 22.387 50 50"
        />
      </G>
    </Svg>
  )
}
export default SvgQrcodeLeftLeaf
