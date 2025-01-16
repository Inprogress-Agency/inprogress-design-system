import * as React from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'
function SvgFlagEs(props) {
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
        <G clipPath="url(#flagEs_svg__clip0_988_2283)">
          <Rect width={28} height={28} rx={14} fill="#F93939" />
          <Path
            d="M35.467 0H3.733A3.733 3.733 0 000 3.733v20.534A3.733 3.733 0 003.733 28h31.734a3.733 3.733 0 003.733-3.733V3.733A3.733 3.733 0 0035.467 0z"
            fill="#F93939"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 7.467h39.2v13.067H0V7.466z"
            fill="#FFDA2C"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.8 11.615v4.704c0 1.306-1.255 2.352-2.8 2.352h-3.733c-1.542-.004-2.8-1.055-2.8-2.356V11.61c0-1.068.836-1.96 1.986-2.25.347-.97 1.415-.1 2.68-.1 1.273 0 2.334-.865 2.68.102 1.147.297 1.987 1.191 1.987 2.252z"
            fill="#D4AF2C"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.8 13.066h1.867v5.6H16.8v-5.6zm-11.2 0h1.867v5.6H5.6v-5.6z"
            fill="#CBCBCB"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.8 16.8h1.867v1.866H16.8V16.8zm-11.2 0h1.867v1.866H5.6V16.8z"
            fill="#1A47B8"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.8 11.2h1.867v1.867H16.8V11.2zm-11.2 0h1.867v1.867H5.6V11.2z"
            fill="#D4AF2C"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.333 11.2H11.2V14H9.333v-2.8zm3.734 3.734h1.866v2.8h-1.866v-2.8z"
            fill="#AF010D"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.067 11.2h1.866V14h-1.866v-2.8z"
            fill="#AE6A3E"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.333 14.934H11.2v2.8H9.333v-2.8z"
            fill="#FFDA2C"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2 11.2L9.333 9.333h5.6L13.067 11.2H11.2z"
            fill="#AF010D"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.2 7.467h1.867v1.866H11.2V7.467z"
            fill="#D4AF2C"
          />
        </G>
        <Defs>
          <ClipPath id="flagEs_svg__clip0_988_2283">
            <Rect width={28} height={28} rx={14} fill="#fff" />
          </ClipPath>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgFlagEs
