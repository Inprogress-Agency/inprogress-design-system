import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgEyesPswClosed(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M9.848 5.832l2.863 2.863.013-.15A2.729 2.729 0 009.998 5.82l-.15.013z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M9.998 4.001a4.546 4.546 0 014.544 4.545c0 .586-.118 1.145-.322 1.658l2.658 2.659A10.793 10.793 0 0020 8.546c-1.577-3.99-5.453-6.817-10.002-6.817-1.273 0-2.49.227-3.622.636l1.963 1.959A4.567 4.567 0 019.998 4zM.909 1.524L2.98 3.597l.414.413A10.765 10.765 0 000 8.546c1.572 3.99 5.453 6.816 9.998 6.816 1.409 0 2.754-.273 3.985-.768l.386.386 2.65 2.654 1.159-1.154L2.068.366.908 1.524zm5.026 5.022L7.339 7.95a2.88 2.88 0 00-.068.596 2.729 2.729 0 002.727 2.726c.204 0 .4-.027.59-.068l1.405 1.404c-.605.3-1.277.482-1.995.482a4.546 4.546 0 01-4.545-4.544c0-.718.182-1.391.482-2z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgEyesPswClosed
