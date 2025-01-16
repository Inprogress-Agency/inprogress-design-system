import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSeedLittle(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M11.9 3.929c-.198-.87-1.015-1.92-2.291-2.154-1.355-.249-2.684.246-3.418 1.722a4.424 4.424 0 00-.377 1.112c-.41-.684-1.197-1.625-2.47-1.753-1.814-.18-2.88.877-3.179 1.75C-.245 5.8.133 6.78 1.011 6.91c.878.13 1.502-.418 2.069-.716.821-.432 2.218-.468 2.513.355.04.219.077.438.107.657.002.298-.421 1.704-.557 1.965-.185.355-.37.581-.21.777.136.166.395.225.629.225.739 0 .856-.107.95-.225.113-.143.643-1.882.054-3.352-.201-1.07 1.07-1.277 1.43-1.286.725-.017 1.836.238 2.532.328 1.58.203 1.514-1.078 1.371-1.71z"
          fill="green"
        />
        <Path
          d="M2.467 4.494c.081-.137.175-.264.28-.385.109-.128.358-.263.368-.448.014-.25-.376-.224-.53-.213a2.458 2.458 0 00-.817.194 2.152 2.152 0 00-.743.536c-.15.169-.28.366-.353.58-.172.5-.167.972.01 1.263a.59.59 0 00.438.287c.803.12.972-.776 1.16-1.362.049-.153.104-.313.187-.452zm4.284-.79c-.046.162-.06.34.025.46.06.086.219.131.321.106.302-.074.517-.482.667-.726.116-.189.264-.37.42-.528.097-.1.227-.213.26-.355.062-.261-.337-.157-.455-.128-.462.116-.904.483-1.127.9-.04.073-.082.169-.11.27z"
          fill="#BDCF46"
        />
      </G>
    </Svg>
  )
}
export default SvgSeedLittle
