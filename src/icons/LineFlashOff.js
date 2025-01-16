import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineFlashOff(props) {
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
          d="M5.273 5.98L2.146 2.854a.5.5 0 01.708-.708l15 15a.5.5 0 01-.708.708l-5.288-5.29-5.004 5.109c-.754.782-2.059.06-1.795-.996l1.17-4.679H4.96a1.062 1.062 0 01-1.021-1.354L5.273 5.98zm5.878 5.878l-5.07-5.07-1.18 4.13c-.01.04.019.08.06.08H6.87a.5.5 0 01.485.622l-1.325 5.3a.1.1 0 00-.003.029.02.02 0 00.003.011c.003.009.013.019.03.03a.1.1 0 00.042.01l.01-.004a.1.1 0 00.024-.018l.003-.004 5.012-5.116zm3.663-3.74l-2.264 2.311.707.707 2.274-2.32.003-.005c.641-.667.18-1.811-.766-1.811h-2.564l1.261-3.594.003-.008A1.061 1.061 0 0012.46 2H7.211c-.474 0-.891.314-1.021.77L5.9 3.78l.809.809.441-1.544A.06.06 0 017.211 3h5.25c.041 0 .07.04.059.08l-1.493 4.254a.5.5 0 00.472.666h3.269c.017 0 .027.003.031.008a.1.1 0 01.025.034.1.1 0 01.007.044.06.06 0 01-.017.032z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineFlashOff
