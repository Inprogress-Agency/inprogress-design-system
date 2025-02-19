import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgMusic(props) {
  return (
    <Svg
      height={32}
      width={32}
      viewBox="0 0 19.846 19.846"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path d="M1.24 9.923a8.683 8.683 0 1117.366 0 8.683 8.683 0 01-17.366 0z" fill="#337180" />
        <Path
          d="M14.764 5.732a.154.154 0 00-.12-.043l-7.437.478a.154.154 0 00-.142.148l-.222 5.12a1.887 1.887 0 00-.632-.107c-.106 0-.215.008-.322.024-.47.064-.86.252-1.16.559-.312.318-.44.678-.379 1.07.06.388.285.698.667.923.288.168.606.253.946.253.098 0 .2-.007.306-.022a2.007 2.007 0 001.052-.47c.288-.255.454-.559.494-.903v-.066c.013-.184.225-4.59.225-4.59l5.762-.463-.207 3.802a1.886 1.886 0 00-.702-.132c-.101 0-.206.007-.31.022-.47.064-.858.255-1.153.57-.304.323-.43.684-.377 1.073.054.39.276.7.66.918.285.162.604.244.948.244.103 0 .21-.007.32-.022a1.986 1.986 0 001.063-.49c.295-.269.452-.581.466-.928.012-.195.111-2.436.3-6.85a.154.154 0 00-.046-.118z"
          fill="#b5e3ea"
        />
      </G>
    </Svg>
  )
}
export default SvgMusic
