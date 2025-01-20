import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function SvgLineReactBubble(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 60 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <G filter="url(#lineReactBubble_svg__filter0_bd_18350_203947)" shapeRendering="crispEdges">
          <Path
            d="M48.824 42.86c0 1.734 1.383 3.14 3.088 3.14S55 44.594 55 42.86c0-1.733-1.383-3.14-3.088-3.14-1.706 0-3.088 1.407-3.088 3.14zM5 21.93c0 11.53 9.17 20.883 20.5 20.93h.087c3.636 0 7.072-.966 10.036-2.648.955 2.06 3.016 3.486 5.404 3.486 3.297 0 5.97-2.718 5.97-6.07a6.078 6.078 0 00-3.43-5.495 21.108 21.108 0 002.607-10.203C46.174 10.37 36.957 1 25.587 1c-2.087.106-.058 0-.087 0C14.17 1.048 5 10.4 5 21.93z"
            fill="#fff"
            fillOpacity={0.4}
          />
          <Path
            d="M44.244 31.927a6.586 6.586 0 013.253 5.7c0 3.621-2.889 6.57-6.47 6.57-2.404 0-4.498-1.33-5.613-3.3a20.81 20.81 0 01-9.827 2.464h-.09C13.886 43.31 4.5 33.727 4.5 21.93 4.5 10.132 13.885.548 25.498.5h.063L25.575.5h.013c11.654 0 21.087 9.602 21.087 21.43 0 3.61-.878 7.011-2.43 9.997zM51.912 46.5c-1.99 0-3.588-1.637-3.588-3.64 0-2.002 1.599-3.64 3.588-3.64 1.99 0 3.588 1.638 3.588 3.64 0 2.003-1.599 3.64-3.588 3.64z"
            stroke={props.color || theme?.colors?.black || '#212121'}
          />
        </G>
        <Defs />
      </G>
    </Svg>
  )
}
export default SvgLineReactBubble
