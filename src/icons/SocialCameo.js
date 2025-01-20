import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialCameo(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path d="M90.28 9.375H70.774l6.16 37.982h8.212z" fill="#60e9e2" />
        <Path d="M133.885 34.405l-13.844-13.738-22.38 31.3 5.829 5.784z" fill="#c949f7" />
        <Path d="M40.825 21.693l-14.19 13.38 30.537 23.41 5.975-5.634z" fill="#e33251" />
        <Path d="M28.083 114.995l13.95 13.63 22.139-31.47-5.874-5.739z" fill="#60e9e2" />
        <Path d="M15.342 65.57l.302 19.503 37.881-6.746-.126-8.211z" fill="#c949f7" />
        <Path d="M120.493 128.384l14.165-13.407-30.58-23.352-5.965 5.645z" fill="#60e9e2" />
        <Path d="M71.509 140.164l19.498.461-5.26-38.116-8.21-.194z" fill="#e33251" />
      </G>
    </Svg>
  )
}
export default SvgSocialCameo
