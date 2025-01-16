import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { G, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function SvgLinePlane(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <G filter="url(#linePlane_svg__filter0_d_2909_16125)">
          <Path
            d="M22.29 3.586a2.184 2.184 0 00-.845.258l-3.539 1.875-4.781-1.173-.281-.07-.281.141-1.618.937-.96.563.89.68 2.04 1.547-2.555 1.36L7.617 8.46l-.328-.14-.328.164-1.313.702-.867.47.657.703 4.054 4.359.375.445.516-.281 3.867-2.063-.773 4.266-.258 1.36 1.289-.54 1.922-.82.28-.117.118-.282 2.789-6.773 3.938-2.11c1.084-.582 1.52-1.962.937-3.046a2.24 2.24 0 00-1.336-1.079 2.34 2.34 0 00-.867-.093zm.14 1.5a.735.735 0 01.422 1.383l-4.196 2.273-.234.117-.094.258-2.789 6.703-.328.14.797-4.429.281-1.523-1.36.727-4.734 2.554-2.976-3.234.117-.071 2.742 1.22.352.163.304-.188 11.415-6.023a.665.665 0 01.28-.07zm-9.399.984l2.883.703-1.547.797-1.688-1.289.352-.21zM5.25 19.5V21h19.5v-1.5H5.25z"
            fill={props.color || theme?.colors?.black || '#212121'}
          />
        </G>
        <Defs />
      </G>
    </Svg>
  )
}
export default SvgLinePlane
