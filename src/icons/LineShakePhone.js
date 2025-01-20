import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
function SvgLineShakePhone(props) {
  const { theme } = useSelector(state => state.theme)

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
        <G
          clipPath="url(#lineShakePhone_svg__clip0_14214_1367)"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeLinecap="round"
        >
          <Path d="M13.057 16.681l.004.018" strokeWidth={2} />
          <Path
            d="M11.93 8.53l-1.972.529M18.199 12.841L6.683 15.927m9.439 2.994a9.326 9.326 0 01-4.6 1.233 5.25 5.25 0 01-4.706-2.887l-.172-.34a13.045 13.045 0 01-1.377-5.14l-.022-.38a5.25 5.25 0 012.633-4.853 9.326 9.326 0 014.6-1.232 5.25 5.25 0 014.706 2.886l.172.34c.807 1.6 1.276 3.35 1.377 5.14l.022.38a5.25 5.25 0 01-2.633 4.853z"
            strokeWidth={1.2}
          />
        </G>
        <Path
          d="M3.443 16.003a5.25 5.25 0 002.632 4.853M2.02 18.16c-.056 1.218.615 2.38 1.732 3M20.698 7.839A5.25 5.25 0 0016.9 3.833m4.616 1.556c-.262-1.19-1.21-2.14-2.45-2.45"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
        <Defs>
          <ClipPath id="lineShakePhone_svg__clip0_14214_1367">
            <Path fill="#fff" transform="rotate(-15 22.064 2.905)" d="M0 0h19.596v19.596H0z" />
          </ClipPath>
        </Defs>
      </G>
    </Svg>
  )
}
export default SvgLineShakePhone
