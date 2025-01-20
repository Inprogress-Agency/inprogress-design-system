import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialOnlyfans(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 8.467 8.467"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path d="M4.233 7.938a3.704 3.704 0 110-7.408 3.704 3.704 0 110 7.408z" fill="#00aff0" />
        <Path
          d="M3.273 2.477a1.92 1.92 0 100 3.842 1.92 1.92 0 000-3.842zm0 2.497a.576.576 0 11.002 0h-.002z"
          fill="#cceffc"
        />
        <Path
          d="M5.432 3.918c.488.14 1.064 0 1.064 0-.167.73-.697 1.187-1.462 1.242A1.917 1.917 0 013.273 6.32l.576-1.832c.593-1.882.896-2.01 2.3-2.01h.965c-.161.71-.717 1.254-1.682 1.44z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialOnlyfans
