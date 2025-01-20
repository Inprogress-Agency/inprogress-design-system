import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineShoppingBasket(props) {
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
          d="M9.75 12a.25.25 0 01.25.25v4a.25.25 0 01-.5 0v-4a.25.25 0 01.25-.25zm4.677.073a.25.25 0 01.073.177v4a.25.25 0 11-.5 0v-4a.25.25 0 01.427-.177z"
          fill="#000"
          stroke={props.color || theme?.colors?.black || '#212121'}
        />
        <Path
          d="M16.045 6.463l-2.5-3.57s0 0 0 0 0 0 0 0a.25.25 0 01.41-.286h0l3.1 4.43.15.213h2.545A1.75 1.75 0 0121.5 9v.785a1.75 1.75 0 01-.648 1.36h0l-1.163.943-.156.126-.025.199-.803 6.308h0a1.75 1.75 0 01-1.736 1.529H7.031a1.75 1.75 0 01-1.736-1.53h0l-.804-6.307-.025-.199-.156-.126-1.162-.943h0a1.75 1.75 0 01-.648-1.36v0V9a1.75 1.75 0 011.75-1.75H6.794l.15-.213 3.101-4.43s0 0 0 0a.25.25 0 01.41.286l-2.5 3.57-.55.787H16.595l-.55-.787zM3.463 10.756h0l1.396 1.132s0 0 0 0a.25.25 0 01.09.163h0l.842 6.607h0a1.25 1.25 0 001.24 1.092h9.938a1.25 1.25 0 001.24-1.092h0l.841-6.607s0 0 0 0a.25.25 0 01.09-.162h0l1.397-1.132A1.252 1.252 0 0021 9.785s0 0 0 0V9a1.25 1.25 0 00-1.25-1.25H4.25A1.25 1.25 0 003 9v.785c0 .377.17.733.463.971z"
          fill="#000"
          stroke={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineShoppingBasket
