import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineFlashOn(props) {
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
          d="M6.19 2.77c.131-.456.548-.77 1.022-.77h5.25c.725 0 1.237.71 1.007 1.398l-.002.008L12.205 7h2.564c.947 0 1.407 1.144.767 1.811l-.004.004-8.676 8.858c-.755.782-2.06.06-1.796-.996l1.17-4.679H4.963a1.062 1.062 0 01-1.022-1.354L6.19 2.77zM7.213 3a.06.06 0 00-.06.045l-2.25 7.874c-.01.04.02.08.06.08H6.87a.501.501 0 01.485.62l-1.325 5.3a.1.1 0 00-.003.03.02.02 0 00.003.011c.003.009.013.019.03.03.018.01.034.01.042.01l.01-.004a.1.1 0 00.024-.018l.004-.004 8.675-8.856a.06.06 0 00.017-.032.1.1 0 00-.007-.044.1.1 0 00-.025-.034c-.004-.005-.014-.007-.03-.008H11.5a.5.5 0 01-.472-.666l1.493-4.254a.062.062 0 00-.06-.08H7.213z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineFlashOn
