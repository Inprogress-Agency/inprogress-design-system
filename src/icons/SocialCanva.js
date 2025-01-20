import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { G } from 'react-native-svg'
function SvgSocialCanva(props) {
  return (
    <Svg
      viewBox="0 0 2.79 2.79"
      width={props.size || 24}
      height={props.size || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Circle cx={1.395} cy={1.395} fill="#23bec7" r={1.395} />
        <Path
          d="M1.428 1.419c.04-.036.073-.07.117-.088.026-.011.054-.026.078-.003.025.024.01.05.002.075-.015.05-.03.101-.043.152-.004.015-.01.032.004.046.016.013.035.004.05-.004.055-.028.1-.062.094-.137-.005-.044 0-.092.041-.124.016-.013.035-.028.056-.013.02.014.005.032 0 .048a.413.413 0 00-.016.187c.002.014 0 .034.013.04.017.006.025-.017.037-.026.011-.01.019-.022.029-.033.026-.029.04-.052.006-.091-.041-.045-.029-.134.011-.176a.082.082 0 01.092-.024c.035.013.046.043.047.078.001.039-.016.074-.029.112.039.01.063-.012.085-.036.052-.057.113-.093.194-.085.058.007.091.038.088.084a.064.064 0 01-.091.05c-.018-.01-.016-.018 0-.028a.027.027 0 00.015-.033.04.04 0 00-.036-.027.09.09 0 00-.063.014c-.059.038-.091.142-.064.205.016.038.046.045.077.018a.147.147 0 00.037-.059.16.16 0 01.02-.04c.014-.018.034-.036.06-.025.024.01.011.036.007.054-.015.062-.027.122.025.174a.013.013 0 010 .02.02.02 0 01-.024.003.146.146 0 01-.084-.075c-.005-.011-.007-.028-.026-.011a.096.096 0 01-.125.01c-.046-.03-.062-.073-.058-.125l.003-.032c-.052.004-.094.016-.124.064a.288.288 0 01-.103.095c-.055.032-.076.022-.09-.038a.623.623 0 01-.008-.032.42.42 0 01-.12.075c-.083.03-.13-.008-.118-.096a.625.625 0 01.037-.13c.003-.011.013-.024 0-.033-.01-.006-.02.004-.028.01a.293.293 0 00-.11.16.26.26 0 01-.018.06.06.06 0 01-.064.038c-.028-.005-.01-.035-.018-.053-.03.016-.06.032-.09.046-.022.01-.051.018-.067 0-.027-.032-.045-.021-.073-.004-.041.027-.088.016-.126-.028-.018-.022-.028-.02-.046 0a.416.416 0 01-.13.09c-.19.09-.377-.011-.388-.221A.599.599 0 01.66.941.21.21 0 01.837.91a.157.157 0 01.117.161.164.164 0 01-.125.148c-.011.003-.026.007-.032-.003-.009-.015.006-.025.015-.032.054-.045.063-.104.053-.169C.855.956.812.932.755.954a.27.27 0 00-.105.078.668.668 0 00-.169.376.302.302 0 00.031.176c.04.078.11.112.195.092a.4.4 0 00.18-.099.076.076 0 00.02-.055.223.223 0 01.234-.204.114.114 0 01.076.032.064.064 0 01.015.072c-.011.028-.037.037-.065.035a.036.036 0 01-.032-.013c-.01-.016.01-.017.016-.025.018-.022.008-.049-.023-.055a.088.088 0 00-.085.027.196.196 0 00-.053.17c.003.023.013.047.039.054.026.007.043-.013.059-.031a.138.138 0 00.025-.051.081.081 0 01.027-.045c.016-.012.034-.022.053-.011.019.01.007.03.007.045 0 .028-.03.06.007.082.02.012.102-.05.108-.078.01-.046.018-.093.027-.139a.078.078 0 01.018-.044.058.058 0 01.064-.016c.024.01.012.032.01.05l-.006.042zm.54-.107c-.004-.011-.01-.022-.025-.02-.013 0-.017.013-.019.025a.112.112 0 00.037.095.134.134 0 00.007-.1z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}
export default SvgSocialCanva
