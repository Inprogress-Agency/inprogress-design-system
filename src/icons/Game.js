import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgGame(props) {
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
          d="M9 10v4M11 12H7M15.107 10.5H15M17.107 13.5H17"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.42 8.72c.691-2.65 2.802-4.676 5.452-5.235l.507-.107a17.537 17.537 0 017.242 0l.507.107c2.65.559 4.76 2.586 5.451 5.234.561 2.15.561 4.411 0 6.562-.69 2.649-2.8 4.675-5.451 5.234l-.507.107a17.536 17.536 0 01-7.242 0l-.507-.107c-2.65-.559-4.76-2.585-5.451-5.234-.561-2.15-.561-4.411 0-6.562z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}
export default SvgGame
