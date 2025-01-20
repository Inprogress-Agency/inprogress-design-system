import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineWifi(props) {
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
          d="M17.331 11a.684.684 0 01-.409-.133c-2.996-2.159-6.864-2.159-9.85 0a.705.705 0 01-.934-.108.6.6 0 01.115-.872c3.485-2.516 7.993-2.516 11.487 0a.587.587 0 01.116.872.674.674 0 01-.525.241z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M16.28 14a.709.709 0 01-.447-.157c-2.331-1.82-5.332-1.82-7.663 0a.728.728 0 01-1.02-.128.75.75 0 01.126-1.033c2.866-2.243 6.575-2.243 9.44 0 .32.246.38.708.127 1.033a.67.67 0 01-.564.285z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M14.245 16a.824.824 0 01-.468-.141 3.171 3.171 0 00-3.551 0c-.336.22-.814.167-1.069-.115-.254-.292-.193-.707.133-.928a4.9 4.9 0 015.413 0c.336.22.397.636.132.928-.132.168-.356.256-.59.256z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.878 3.833a12.604 12.604 0 00-5.756 0 6.761 6.761 0 00-5.039 5.039 12.604 12.604 0 000 5.756 6.761 6.761 0 005.039 5.039c1.893.444 3.863.444 5.756 0a6.761 6.761 0 005.039-5.039 12.603 12.603 0 000-5.756 6.761 6.761 0 00-5.039-5.039zM8.78 2.373a14.103 14.103 0 016.442 0 8.261 8.261 0 016.156 6.156 14.104 14.104 0 010 6.442 8.261 8.261 0 01-6.156 6.156 14.104 14.104 0 01-6.442 0 8.261 8.261 0 01-6.156-6.156 14.104 14.104 0 010-6.442 8.261 8.261 0 016.156-6.156z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineWifi
