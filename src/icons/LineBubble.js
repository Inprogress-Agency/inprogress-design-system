import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function SvgLineBubble(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 115 55"
      fill="#FFF"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <G filter="url(#lineBubble_svg__filter0_bd_18350_204189)" shapeRendering="crispEdges">
          <Path
            d="M103.824 42.86c0 1.734 1.382 3.14 3.088 3.14 1.705 0 3.088-1.406 3.088-3.14 0-1.733-1.383-3.14-3.088-3.14-1.706 0-3.088 1.407-3.088 3.14zM5 21.93c0 11.53 9.17 20.883 20.5 20.93h55.087c3.636 0 7.072-.966 10.036-2.648.955 2.06 3.016 3.486 5.404 3.486 3.297 0 5.97-2.718 5.97-6.07a6.078 6.078 0 00-3.43-5.495 21.11 21.11 0 002.607-10.203C101.174 10.37 91.957 1 80.587 1H25.5C14.17 1.048 5 10.4 5 21.93z"
            fill="#fff"
            fillOpacity={0.4}
          />
          <Path
            d="M106.912 46.5c-1.989 0-3.588-1.637-3.588-3.64 0-2.002 1.599-3.64 3.588-3.64s3.588 1.638 3.588 3.64c0 2.003-1.599 3.64-3.588 3.64zm-81.414-3.14C13.885 43.312 4.5 33.728 4.5 21.93 4.5 10.133 13.885.55 25.498.5h55.089c11.654 0 21.087 9.602 21.087 21.43 0 3.61-.878 7.011-2.43 9.997a6.584 6.584 0 013.253 5.7c0 3.621-2.889 6.57-6.47 6.57-2.404 0-4.498-1.33-5.613-3.3a20.81 20.81 0 01-9.827 2.464h-55.09z"
            stroke={props.color || theme?.colors?.black || '#212121'}
          />
        </G>
        <Defs />
      </G>
    </Svg>
  )
}
export default SvgLineBubble
