import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgHeartLinear(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M11.31 21.787h0l-.008-.002c-1.83-.628-4.231-2.07-6.17-4.194-1.935-2.119-3.382-4.884-3.382-8.163 0-3.226 2.608-5.84 5.81-5.84 1.558 0 3.01.607 4.085 1.692l.355.358.355-.358a5.714 5.714 0 014.085-1.692c3.201 0 5.81 2.623 5.81 5.84 0 3.284-1.447 6.05-3.382 8.166-1.938 2.123-4.34 3.563-6.17 4.19h0l-.007.003c-.18.065-.419.1-.691.1-.272 0-.511-.035-.69-.1zm.158-.466l.004.001c.166.056.372.07.533.07.161 0 .367-.014.533-.07h0l.004-.001c1.217-.418 3.502-1.601 5.491-3.558 1.995-1.963 3.727-4.741 3.727-8.335 0-2.944-2.381-5.34-5.31-5.34a5.251 5.251 0 00-4.242 2.143h0c-.03.04-.097.082-.198.082s-.168-.042-.197-.082h0l-.003-.003a5.27 5.27 0 00-4.25-2.14c-2.929 0-5.31 2.396-5.31 5.34 0 3.589 1.73 6.367 3.723 8.331 1.987 1.958 4.273 3.144 5.495 3.562zM3.25 9.428c0-2.397 1.939-4.34 4.31-4.34a4.27 4.27 0 013.449 1.738c.25.34.643.487 1.001.487.359 0 .752-.148 1.002-.488a4.251 4.251 0 013.438-1.737c2.371 0 4.31 1.943 4.31 4.34 0 3.246-1.558 5.783-3.428 7.622-1.874 1.844-4.026 2.95-5.11 3.324a1.332 1.332 0 01-.433 0c-1.09-.374-3.241-1.482-5.114-3.327-1.87-1.841-3.425-4.378-3.425-7.62z"
          fill="url(#heartLinear_svg__paint0_linear_10207_6164)"
          stroke="url(#heartLinear_svg__paint1_linear_10207_6164)"
        />
        <Defs>
          <LinearGradient
            id="heartLinear_svg__paint0_linear_10207_6164"
            x1={22.75}
            y1={12.738}
            x2={1.25}
            y2={12.738}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7A4BFF" />
            <Stop offset={1} stopColor="#FF5F4A" />
          </LinearGradient>
          <LinearGradient
            id="heartLinear_svg__paint1_linear_10207_6164"
            x1={22.75}
            y1={12.738}
            x2={1.25}
            y2={12.738}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7A4BFF" />
            <Stop offset={1} stopColor="#FF5F4A" />
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgHeartLinear
