import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgPlantSeedSeparated(props) {
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
          d="M12.998 16.238h-.5v4.5a.5.5 0 11-1 0v-5.995l.019-.98a6 6 0 015.981-5.525h2.5a1.5 1.5 0 011.5 1.5v.5a6 6 0 01-6 6h-2.5zm-7-12h0a6.503 6.503 0 016.058 4.137 7.981 7.981 0 00-2.496 4.863h-.562a6.5 6.5 0 01-6.5-6.5v-1a1.5 1.5 0 011.5-1.5h2z"
          fill="#7ACB8B"
          stroke="#7ACB8B"
        />
      </G>
    </Svg>
  )
}
export default SvgPlantSeedSeparated
