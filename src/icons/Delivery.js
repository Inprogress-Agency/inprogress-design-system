import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgDelivery(props) {
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
          d="M12 14.738h1c1.1 0 2-.9 2-2v-10H6c-1.5 0-2.81.83-3.49 2.05"
          stroke="#7ACB8B"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2 17.738c0 1.66 1.34 3 3 3h1c0-1.1.9-2 2-2s2 .9 2 2h4c0-1.1.9-2 2-2s2 .9 2 2h1c1.66 0 3-1.34 3-3v-3h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l-1.71-2.99a2.016 2.016 0 00-1.74-1.01H15v7c0 1.1-.9 2-2 2h-1"
          stroke="#7ACB8B"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 22.738a2 2 0 100-4 2 2 0 000 4zM16 22.738a2 2 0 100-4 2 2 0 000 4zM22 12.738v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l1.71 3zM2 8.738h6M2 11.738h4M2 14.738h2"
          stroke="#7ACB8B"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgDelivery
