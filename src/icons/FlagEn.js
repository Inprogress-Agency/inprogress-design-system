import * as React from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
function SvgFlagEn(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <G clipPath="url(#flagEn_svg__clip0_988_12306)">
          <Rect width={28} height={28} rx={14} fill="#1A47B8" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-1.43 0H-5.6v4.667L29.407 28H33.6v-4.667L-1.43 0z"
            fill="#fff"
          />
          <Path d="M-4.21 0L33.6 25.266V28h-1.358L-5.6 2.708V0h1.39z" fill="#F93939" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.867 0H33.6v4.667S9.352 20.212-1.867 28H-5.6v-4.667L29.867 0z"
            fill="#fff"
          />
          <Path d="M33.6 0h-1.266L-5.6 25.288V28h1.39L33.6 2.728V0z" fill="#F93939" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.656 0h10.72v8.637H33.6v10.72H19.377V28H8.656v-8.642H-5.6V8.637H8.656V0z"
            fill="#fff"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.905 0h6.19v10.77H33.6v6.46H17.095V28h-6.19V17.23H-5.6v-6.46h16.505V0z"
            fill="#F93939"
          />
        </G>
        <Defs>
          <ClipPath id="flagEn_svg__clip0_988_12306">
            <Rect width={28} height={28} rx={14} fill="#fff" />
          </ClipPath>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgFlagEn
