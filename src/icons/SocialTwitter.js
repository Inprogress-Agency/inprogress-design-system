import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialTwitter(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 279 279"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Circle cx={139.5} cy={139.5} r={139.5} fill="#000" />
        <Path
          d="M156.19 126.992L219.486 55h-14.994l-54.983 62.497L105.626 55H55l66.374 94.515L55 225h14.994l58.027-66.013L174.374 225H225M75.406 66.063H98.44L204.48 214.48H181.44"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialTwitter
