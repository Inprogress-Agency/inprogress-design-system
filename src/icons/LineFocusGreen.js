import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineFocusGreen(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path d="M10 15.238a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" stroke="#7ACB8B" strokeWidth={1.5} />
        <Path d="M10 12.238a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#7ACB8B" />
        <Path
          d="M2.5 5.738s3.75-5.75 10.25-3.5 6.25 8.75 6.25 8.75m-1.5 4.75s-3 5.5-9.75 3.75S1 10.738 1 10.738v8m18-16v8"
          stroke="#7ACB8B"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineFocusGreen
