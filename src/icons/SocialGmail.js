import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function SvgSocialGmail(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <G filter="url(#socialGmail_svg__filter0_d_49_6652)">
          <Path
            d="M2 12.706c0-3.485 0-5.228.678-6.559a6.222 6.222 0 012.72-2.719c1.33-.678 3.073-.678 6.558-.678h8.088c3.485 0 5.228 0 6.559.678a6.222 6.222 0 012.719 2.72C30 7.477 30 9.22 30 12.705v8.088c0 3.485 0 5.228-.678 6.559a6.222 6.222 0 01-2.72 2.719c-1.33.678-3.073.678-6.558.678h-8.088c-3.485 0-5.228 0-6.559-.678a6.222 6.222 0 01-2.719-2.72C2 26.023 2 24.28 2 20.795v-8.088z"
            fill="#fff"
          />
          <Path
            d="M22.051 9.273l-5.987 4.672L9.94 9.273v.001l.008.007v6.542l6.047 4.774 6.056-4.59V9.274z"
            fill="#EA4335"
          />
          <Path
            d="M23.623 8.136l-1.572 1.137v6.735L27 12.209V9.921s-.6-3.268-3.375-1.785z"
            fill="#FBBC05"
          />
          <Path
            d="M22.051 16.008v8.735h3.792S26.923 24.63 27 23.4V12.21l-4.949 3.799z"
            fill="#34A853"
          />
          <Path
            d="M9.948 24.75v-8.927l-.008-.006.008 8.933zM9.94 9.274l-1.564-1.13C5.602 6.66 5 9.927 5 9.927v2.288l4.94 3.602V9.274z"
            fill="#C5221F"
          />
          <Path d="M9.94 9.274v6.543l.008.006V9.28l-.008-.006z" fill="#C5221F" />
          <Path
            d="M5 12.217v11.192a1.35 1.35 0 001.157 1.341h3.792l-.009-8.933-4.94-3.6z"
            fill="#4285F4"
          />
        </G>
        <Defs />
      </G>
    </Svg>
  )
}
export default SvgSocialGmail
