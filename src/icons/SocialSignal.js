import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialSignal(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fill="#2196f3"
          d="M4.333 2h23.334A2.333 2.333 0 0130 4.333v23.334A2.333 2.333 0 0127.667 30H4.333A2.333 2.333 0 012 27.667V4.333A2.333 2.333 0 014.333 2z"
        />
        <Path
          fill="#b3e5fc"
          d="M8.222 28.056a.391.391 0 01-.383-.321l-.34-1.916.766-.135.265 1.497 1.468-.395.202.752-1.877.504a.369.369 0 01-.1.014zM7.21 24.476a6.758 6.758 0 00-1.024-2.097c-.218-.296-.42-.6-.609-.912l.667-.401c.175.291.365.575.567.851.501.679.886 1.465 1.145 2.338zm-2.308-4.31a11.28 11.28 0 01-.912-3.536l.774-.07a10.5 10.5 0 00.85 3.292zM16.467 27.27l-.03-.778a11.586 11.586 0 003.355-.624l.254.735a12.351 12.351 0 01-3.58.666zm-1.463-.032a11.89 11.89 0 01-.686-.075c-.987-.135-1.904-.126-2.738.028l-.142-.765c.917-.169 1.914-.18 2.985-.033.213.03.428.053.643.07zm6.393-1.194l-.34-.699a11.325 11.325 0 002.809-1.933l.533.567c-.889.835-1.9 1.53-3.002 2.065zm4.005-3.131l-.6-.498a10.769 10.769 0 001.74-2.925l.723.286a11.541 11.541 0 01-1.863 3.137zm2.314-4.533l-.756-.19a10.478 10.478 0 00.285-3.387l.775-.06a11.26 11.26 0 01-.304 3.638zM4.732 15.189l-.778-.032a11.23 11.23 0 01.741-3.576l.726.279a10.42 10.42 0 00-.69 3.329zm22.32-1.737a10.594 10.594 0 00-1.233-3.169l.67-.394a11.344 11.344 0 011.323 3.402zM5.99 10.62l-.684-.37a11.727 11.727 0 012.215-2.897l.538.562a10.932 10.932 0 00-2.07 2.705zm19.062-1.47a11.18 11.18 0 00-2.472-2.346l.443-.639c1.011.702 1.9 1.547 2.643 2.511zM9.104 7.03l-.465-.623a12.162 12.162 0 013.212-1.719l.262.733A11.426 11.426 0 009.104 7.03zm12.307-.939a11.429 11.429 0 00-3.22-1.13l.146-.763c1.203.23 2.36.635 3.439 1.206zm-7.983-1.05l-.172-.759a12.588 12.588 0 013.631-.273l-.054.775a11.883 11.883 0 00-3.405.257z"
        />
        <Path
          fill="#fff"
          d="M16 6.7c-5.154 0-9.333 3.997-9.333 8.927 0 2.641 1.205 5.007 3.11 6.641v3.065l2.807-1.403a9.669 9.669 0 003.416.626c5.154 0 9.333-3.997 9.333-8.928 0-4.93-4.179-8.928-9.333-8.928z"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialSignal
