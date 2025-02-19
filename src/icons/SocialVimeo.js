import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialVimeo(props) {
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
          d="M29.986 9.508c-.125 2.719-2.028 6.442-5.71 11.17-3.806 4.936-7.028 7.405-9.663 7.405-1.631 0-3.012-1.506-4.142-4.518l-2.258-8.283c-.838-3.014-1.738-4.52-2.699-4.52-.21 0-.94.44-2.197 1.318L2 10.386a369.237 369.237 0 004.079-3.64c1.84-1.59 3.22-2.426 4.141-2.51 2.176-.209 3.515 1.277 4.017 4.456.543 3.43.92 5.565 1.129 6.4.627 2.845 1.317 4.267 2.07 4.267.586 0 1.464-.92 2.636-2.761 1.172-1.84 1.8-3.242 1.882-4.204.167-1.59-.46-2.386-1.882-2.386-.669 0-1.36.147-2.07.44 1.38-4.477 4.016-6.651 7.907-6.526 2.885.084 4.244 1.946 4.077 5.586z"
          fill="#1ab7ea"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialVimeo
