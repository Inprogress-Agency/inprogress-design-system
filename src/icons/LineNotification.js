import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLineNotification(props) {
  const { theme } = useSelector(state => state.theme)

  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M9 1v1.005M6.01 15.903c1.987.224 3.993.224 5.98 0a3.451 3.451 0 01-.09.574l-.082.334a2.867 2.867 0 01-2.114 2.106c-.463.11-.945.11-1.408 0a2.867 2.867 0 01-2.114-2.106l-.082-.334a3.453 3.453 0 01-.09-.574zm-2.982-9.27a6.303 6.303 0 014.13-4.33c1.235-.4 2.577-.402 3.81.005a6.145 6.145 0 014.011 4.28l.584 2.223.467 2.117c.144.651.34 1.322.443 1.981a2.239 2.239 0 01-1.76 2.548l-.368.075a26.772 26.772 0 01-10.69 0l-.367-.075a2.239 2.239 0 01-1.76-2.548c.102-.66.298-1.33.442-1.982l.468-2.116.59-2.178z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLineNotification
