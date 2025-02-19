import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialLine(props) {
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
          d="M30 15.248C30 8.908 23.72 3.75 16 3.75S2 8.908 2 15.248c0 5.684 4.98 10.444 11.708 11.344.456.1 1.077.304 1.234.698.141.359.092.92.045 1.282 0 0-.164 1-.2 1.212-.06.359-.28 1.401 1.213.764 1.494-.637 8.063-4.804 11-8.226 2.029-2.252 3-4.537 3-7.074z"
          fill="#2CCF54"
        />
        <Path
          d="M13.155 12.174h-.981a.274.274 0 00-.274.276v6.166c0 .152.123.275.274.275h.982c.15 0 .272-.123.272-.275V12.45a.274.274 0 00-.273-.276zM19.915 12.174h-.982a.274.274 0 00-.273.276v3.663l-2.796-3.816a.282.282 0 00-.227-.123h-.981a.274.274 0 00-.273.276v6.166c0 .152.122.275.273.275h.981c.151 0 .273-.123.273-.275v-3.662l2.8 3.82c.05.073.135.117.223.117h.982c.15 0 .272-.123.272-.275V12.45a.274.274 0 00-.272-.276zM10.788 17.347H8.12V12.45a.274.274 0 00-.272-.276h-.983a.274.274 0 00-.272.276v6.165c0 .15.121.276.272.276h3.923c.15 0 .272-.123.272-.276v-.992a.274.274 0 00-.272-.276zM25.338 13.718c.15 0 .272-.123.272-.275v-.993a.274.274 0 00-.272-.276h-3.923a.276.276 0 00-.273.276v6.166c0 .149.122.275.272.275h3.924c.15 0 .272-.123.272-.275v-.993a.274.274 0 00-.272-.276H22.67v-1.042h2.668c.15 0 .272-.124.272-.276v-.993a.274.274 0 00-.272-.275H22.67v-1.043h2.668z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialLine
