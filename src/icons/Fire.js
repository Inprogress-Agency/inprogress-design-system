import * as React from 'react'
import Svg, { Path, Defs, RadialGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgFire(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M10.819 13.646c-.178 1.9-.303 5.262.819 6.693 0 0-.528-3.693 4.206-8.328 1.906-1.865 2.347-4.403 1.681-6.306-.378-1.078-1.069-1.969-1.668-2.59a.559.559 0 01.428-.947c3.08.137 8.075.993 10.197 6.318.93 2.338 1 4.753.556 7.21-.282 1.568-1.282 5.056 1 5.484 1.628.306 2.415-.987 2.768-1.919a.555.555 0 01.932-.175c2.75 3.128 2.984 6.813 2.415 9.985-1.1 6.13-7.309 10.593-13.478 10.593-7.706 0-13.84-4.409-15.431-12.39-.64-3.222-.316-9.597 4.653-14.097.369-.338.972-.038.922.469z"
          fill="url(#fire_svg__paint0_radial_2644_16115)"
        />
        <Path
          d="M23.492 25.112c-2.841-3.656-1.57-7.828-.872-9.49.093-.22-.157-.426-.353-.291-1.222.831-3.725 2.787-4.891 5.54-1.578 3.722-1.466 5.544-.531 7.77.562 1.34-.09 1.624-.419 1.674-.319.05-.612-.162-.847-.384a5.029 5.029 0 01-1.387-2.375c-.05-.194-.303-.247-.42-.088-.874 1.21-1.327 3.15-1.35 4.522-.068 4.24 3.435 7.678 7.673 7.678 5.34 0 9.231-5.906 6.162-10.843-.89-1.438-1.728-2.379-2.765-3.713z"
          fill="url(#fire_svg__paint1_radial_2644_16115)"
        />
        <Defs>
          <RadialGradient
            id="fire_svg__paint0_radial_2644_16115"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-22.0584 -.09586 .1573 -36.19346 19.149 39.762)"
          >
            <Stop offset={0.314} stopColor="#FF9800" />
            <Stop offset={0.662} stopColor="#FF6D00" />
            <Stop offset={0.972} stopColor="#F44336" />
          </RadialGradient>
          <RadialGradient
            id="fire_svg__paint1_radial_2644_16115"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90.579 1.378 18.998) scale(23.0801 17.3695)"
          >
            <Stop offset={0.214} stopColor="#FFF176" />
            <Stop offset={0.328} stopColor="#FFF27D" />
            <Stop offset={0.487} stopColor="#FFF48F" />
            <Stop offset={0.672} stopColor="#FFF7AD" />
            <Stop offset={0.793} stopColor="#FFF9C4" />
            <Stop offset={0.822} stopColor="#FFF8BD" stopOpacity={0.804} />
            <Stop offset={0.863} stopColor="#FFF6AB" stopOpacity={0.529} />
            <Stop offset={0.91} stopColor="#FFF38D" stopOpacity={0.209} />
            <Stop offset={0.941} stopColor="#FFF176" stopOpacity={0} />
          </RadialGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgFire
