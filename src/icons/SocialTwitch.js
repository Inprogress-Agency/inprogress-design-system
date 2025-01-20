import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialTwitch(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 3.84 3.84"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#65459b"
          d="M2.576 3.235H1.92l-.438.439h-.438v-.44H.24V.9L.458.314h2.994v2.045zm.585-1.022V.606H.751v2.118h.657v.438l.438-.438h.803z"
        />
        <Path fill="#65459b" d="M2.357 1.19v.878h.292V1.19zm-.803.877h.292V1.19h-.292z" />
      </G>
    </Svg>
  )
}
export default SvgSocialTwitch
