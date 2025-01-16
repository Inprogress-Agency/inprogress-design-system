import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialMedium(props) {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 3.277 3.277"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Path
          d="M.208 2.608v-.163h.063c.073 0 .107-.013.135-.05l.02-.025v-.723C.425.93.425.923.41.898.382.854.352.84.275.84H.208V.507L.745.51l.536.002.176.655c.096.36.18.656.184.657.005.002.009.002.009 0 0-.004.327-1.21.345-1.275l.012-.04h1.061V.84h-.062c-.072 0-.097.01-.129.052l-.022.029v.722c0 .722 0 .723.016.745.034.045.062.057.133.057h.064v.325H2.053v-.325h.209V1.7c0-.423-.003-.744-.006-.744a.54.54 0 00-.038.11l-.25.907-.22.796h-.193l-.192-.001C1.362 2.743.867.96.861.959.854.955.85 1.138.85 1.7v.745h.21v.325H.208z"
          fill="#1a1918"
          stroke="#3b7844"
          strokeWidth={0.008}
          strokeOpacity={0.474}
        />
      </G>
    </Svg>
  )
}
export default SvgSocialMedium
