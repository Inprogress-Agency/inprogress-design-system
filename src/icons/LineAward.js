import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineAward(props) {
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
          d="M17.07 7.26V4.63c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56m6.3 3.8l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 00-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0zM7.167 6.582l.166-.096C8.853 5.61 9.613 5.172 10.419 5a5.185 5.185 0 012.162 0c.806.172 1.566.61 3.086 1.486l.166.096c1.416.816 2.124 1.225 2.656 1.784a5.478 5.478 0 011.296 2.272c.215.75.215 1.583.215 3.248 0 1.665 0 2.498-.215 3.248a5.478 5.478 0 01-1.296 2.272c-.532.56-1.24.968-2.656 1.784l-.166.095c-1.52.877-2.28 1.315-3.086 1.487a5.188 5.188 0 01-2.162 0c-.806-.172-1.566-.61-3.086-1.486l-.166-.096c-1.416-.816-2.124-1.225-2.656-1.784a5.477 5.477 0 01-1.296-2.272C3 16.384 3 15.551 3 13.886c0-1.665 0-2.498.215-3.248A5.477 5.477 0 014.51 8.366c.532-.56 1.24-.968 2.656-1.784z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineAward
