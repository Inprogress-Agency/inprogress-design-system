import * as React from 'react'
import { useSelector } from 'react-redux'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgLinestarIa(props) {
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
          d="M12.877 16.168c.152-.414.76-.414.913 0l.417 1.134a.476.476 0 00.294.285l1.176.401c.43.147.43.734 0 .88l-1.176.403a.476.476 0 00-.294.284l-.417 1.134c-.152.415-.76.415-.913 0l-.417-1.134a.476.476 0 00-.295-.284l-1.176-.402a.462.462 0 010-.88l1.176-.402a.476.476 0 00.295-.285l.417-1.134zM14.64 3.473c.231-.63 1.156-.63 1.387 0l.794 2.16c.074.202.239.36.448.432l2.24.766a.702.702 0 010 1.338l-2.24.766a.724.724 0 00-.448.432l-.794 2.16c-.231.63-1.156.63-1.388 0l-.793-2.16a.723.723 0 00-.448-.432l-2.241-.766a.702.702 0 010-1.338l2.24-.766a.723.723 0 00.448-.432l.794-2.16zM6.486 9.363a.545.545 0 011.028 0l.468 1.323a.545.545 0 00.332.332l1.323.468a.545.545 0 010 1.028l-1.323.468a.545.545 0 00-.332.332l-.468 1.323a.545.545 0 01-1.028 0l-.468-1.323a.545.545 0 00-.332-.332l-1.323-.468a.545.545 0 010-1.028l1.323-.468a.545.545 0 00.332-.332l.468-1.323z"
          stroke={props.color || theme?.colors?.black || '#212121'}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  )
}
export default SvgLinestarIa
