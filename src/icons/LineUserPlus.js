import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineUserPlus(props) {
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
        <Path
          d="M21 12.75h-4m2 2v-4"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Path
          d="M3 19.861c0-2.413 1.697-4.468 4.004-4.848l.208-.035a17.134 17.134 0 015.576 0l.208.035c2.307.38 4.004 2.435 4.004 4.848 0 1.043-.819 1.889-1.828 1.889H4.828C3.818 21.75 3 20.904 3 19.861zM14.083 7.688c0 2.174-1.828 3.937-4.083 3.937S5.917 9.862 5.917 7.687C5.917 5.514 7.745 3.75 10 3.75s4.083 1.763 4.083 3.938z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgLineUserPlus
