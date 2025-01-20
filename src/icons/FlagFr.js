import * as React from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
function SvgFlagFr(props) {
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
        <G clipPath="url(#flagFr_svg__clip0_988_8906)">
          <Rect width={28} height={28} rx={14} fill="#fff" />
          <Path fillRule="evenodd" clipRule="evenodd" d="M-5.6 0H7.467v28H-5.6V0z" fill="#1A47B8" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.533 0H33.6v28H20.533V0z"
            fill="#F93939"
          />
        </G>
        <Defs>
          <ClipPath id="flagFr_svg__clip0_988_8906">
            <Rect width={28} height={28} rx={14} fill="#fff" />
          </ClipPath>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgFlagFr
