import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLinePause(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M4 7.2c0-1.509 0-2.262.52-2.731C5.043 4 5.88 4 7.557 4s2.513 0 3.034.469c.521.469.521 1.222.521 2.731v9.6c0 1.509 0 2.262-.52 2.731C10.068 20 9.231 20 7.555 20c-1.677 0-2.514 0-3.035-.469C4 19.062 4 18.31 4 16.8V7.2zm8.889 0c0-1.509 0-2.262.52-2.731C13.932 4 14.769 4 16.445 4c1.677 0 2.514 0 3.035.469C20 4.938 20 5.69 20 7.2v9.6c0 1.509 0 2.262-.52 2.731-.522.469-1.36.469-3.036.469s-2.513 0-3.034-.469c-.521-.469-.521-1.222-.521-2.731V7.2z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLinePause
