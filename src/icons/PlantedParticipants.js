import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgPlantedParticipants(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M.917 10.148c0-1.407.99-2.606 2.335-2.828l.122-.02a9.994 9.994 0 013.253 0l.12.02c1.346.222 2.336 1.42 2.336 2.828 0 .609-.477 1.102-1.066 1.102H1.983c-.589 0-1.066-.493-1.066-1.102zM7.382 3.047c0 1.268-1.066 2.297-2.382 2.297-1.315 0-2.382-1.029-2.382-2.297C2.618 1.778 3.685.75 5 .75c1.316 0 2.382 1.028 2.382 2.297z"
          stroke={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgPlantedParticipants
