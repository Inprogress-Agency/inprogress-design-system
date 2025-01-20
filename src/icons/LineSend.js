import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineSend(props) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.204 19.245c-1.117 0-2.698-.786-3.948-4.545l-.682-2.046-2.046-.682C1.778 10.722.992 9.141.992 8.023c0-1.108.786-2.698 4.536-3.958l8.04-2.68c2.008-.672 3.684-.473 4.716.55 1.032 1.022 1.231 2.708.559 4.715l-2.68 8.04c-1.26 3.77-2.841 4.555-3.959 4.555zM5.974 5.42C3.34 6.3 2.402 7.342 2.402 8.023c0 .682.938 1.724 3.57 2.595l1.806.602a.682.682 0 01.031-.034l3.39-3.4a.715.715 0 011.004 0 .715.715 0 010 1.004L8.89 12.114l.71 2.131c.871 2.633 1.922 3.57 2.604 3.57.682 0 1.724-.937 2.604-3.57l2.68-8.04c.483-1.458.398-2.651-.217-3.267-.616-.615-1.81-.691-3.258-.208l-8.04 2.69z"
          fill={props.color || theme?.colors?.black || '#212121'}
        />
      </G>
    </Svg>
  )
}
export default SvgLineSend
