import * as React from 'react'
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg'
function SvgBolt(props) {
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
        <G clipPath="url(#bolt_svg__clip0_2644_16112)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.042 1.3a.504.504 0 01.462-.3h3.988c.375 0 .62.395.451.731L7.81 4h1.679c.45 0 .675.544.357.862l-5.977 5.976c-.377.378-1.004-.01-.835-.516L4.306 6.5H2.507a.505.505 0 01-.461-.71L4.042 1.3z"
            fill="url(#bolt_svg__paint0_linear_2644_16112)"
          />
          <Path
            d="M3.387 5.157l1.3-3.25a.25.25 0 01.232-.157h.462a.25.25 0 01.232.343l-1.3 3.25a.25.25 0 01-.232.157h-.462a.25.25 0 01-.232-.343z"
            fill="#fff"
          />
        </G>
        <Defs>
          <LinearGradient
            id="bolt_svg__paint0_linear_2644_16112"
            x1={9.994}
            y1={10.989}
            x2={0.212}
            y2={8.721}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FB9400" />
            <Stop offset={1} stopColor="#FFAB38" />
          </LinearGradient>
          <ClipPath id="bolt_svg__clip0_2644_16112">
            <Path fill="#fff" d="M0 0h12v12H0z" />
          </ClipPath>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgBolt
