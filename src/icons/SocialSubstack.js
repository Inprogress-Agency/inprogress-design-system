import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialSubstack(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M2.792 14.68v7.66h26.416v-7.66zM2.792 8.34v3.17h26.416V8.34zM2.792 2v3.17h26.416V2zM2.792 22.34h26.416V30L16 22.34 2.793 30z"
          fill="#ff6712"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialSubstack
