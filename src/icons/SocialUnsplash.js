import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialUnsplash(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.902.75h.196c3.35 0 6.189.668 8.535 1.923a13.084 13.084 0 015.444 5.444C31.332 10.463 32 13.303 32 16.652v.196c0 3.35-.668 6.189-1.923 8.535a13.084 13.084 0 01-5.444 5.444c-2.346 1.255-5.186 1.923-8.535 1.923h-.196c-3.35 0-6.189-.668-8.535-1.923a13.084 13.084 0 01-5.444-5.444C.668 23.037 0 20.197 0 16.848v-.196c0-3.35.668-6.189 1.923-8.535a13.084 13.084 0 015.444-5.444C9.713 1.418 12.553.75 15.902.75z"
          fill="#FAF8F9"
        />
        <Path
          d="M12.889 15.861v4.445h6.222V15.86H24v8.889H8v-8.889h4.889zM19.11 8.75v4.444H12.89V8.75h6.222z"
          fill="#000"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialUnsplash
