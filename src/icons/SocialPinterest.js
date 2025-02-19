import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialPinterest(props) {
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
        <Circle cx={16} cy={16.75} r={14} fill="#fff" />
        <Path
          d="M16 30.75c7.732 0 14-6.268 14-14s-6.268-14-14-14-14 6.268-14 14c0 5.68 3.383 10.57 8.243 12.765l.02-.409a8.78 8.78 0 00.016-.358c0-.421.286-2.508.286-2.508l1.75-7.185c-.27-.437-.471-1.363-.471-2.07 0-3.264 1.817-3.97 2.928-3.97 1.413 0 1.733 1.53 1.733 2.658 0 .596-.31 1.53-.628 2.49-.337 1.018-.685 2.067-.685 2.777 0 1.38 1.363 2.07 2.306 2.07 2.49 0 4.778-3.13 4.778-6.26s-1.463-6.916-6.26-6.916c-4.795 0-6.949 3.652-6.949 6.445 0 1.884.707 3.264 1.06 3.5.101.09.273.367.152.757-.121.39-.342 1.262-.438 1.65-.01.089-.117.241-.454.134-.42-.135-3.096-1.818-3.096-6.041 0-4.224 3.315-9.137 9.726-9.137 6.41 0 9.692 4.308 9.692 9.608 0 5.3-4.29 8.683-7.555 8.683-2.612 0-3.635-1.167-3.82-1.75l-.993 3.786c-.234.628-.671 1.757-1.21 2.74 1.228.352 2.527.541 3.869.541z"
          fill="#BB0F23"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialPinterest
