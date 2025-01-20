import * as React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'
function SvgSocialOpensea(props) {
  return (
    <Svg
      viewBox="0 0 1.28 1.28"
      width={props.size || 24}
      height={props.size || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G scale={1}>
        <Circle cx={0.64} cy={0.64} fill="#2081e2" r={0.56} />
        <G fill="#fff">
          <Path d="M.356.659L.36.655.504.427a.005.005 0 01.01 0C.536.483.557.55.548.593a.257.257 0 01-.035.072.005.005 0 01-.004.002H.36A.005.005 0 01.357.66z" />
          <Path d="M1.006.701v.036a.005.005 0 01-.003.005.18.18 0 00-.066.045C.896.844.864.925.794.925H.502A.188.188 0 01.315.737V.734C.315.731.317.73.32.73h.163c.003 0 .005.003.005.006a.056.056 0 00.006.032.057.057 0 00.051.031h.08V.736H.547A.005.005 0 01.542.727L.545.723A.58.58 0 00.574.677a.362.362 0 00.02-.04L.597.629.601.617l.003-.01A.162.162 0 00.608.553L.606.538A.17.17 0 00.604.523.246.246 0 00.599.502V.499L.593.484A.558.558 0 00.58.439L.572.422.562.399A.309.309 0 01.558.39.322.322 0 00.553.38L.55.373.54.355A.003.003 0 01.544.35l.061.017.009.002.009.003h.003V.337C.626.318.64.304.658.304c.008 0 .016.004.022.01.006.005.01.013.01.022V.39l.006.002a.005.005 0 01.001 0l.007.006.008.006a.478.478 0 01.027.024A.474.474 0 01.77.46a.392.392 0 01.01.01l.008.012L.8.497l.005.007a.26.26 0 01.017.03.147.147 0 01.01.034l.002.01A.093.093 0 01.83.606a.105.105 0 01-.003.012L.823.63a.16.16 0 01-.012.024.137.137 0 01-.006.008L.8.671a.176.176 0 01-.015.02.376.376 0 01-.012.013.12.12 0 01-.007.008L.758.719a.3.3 0 01-.01.01L.742.733a.005.005 0 01-.004.002H.69v.062h.062A.058.058 0 00.788.785C.792.78.808.768.827.747A.005.005 0 01.829.746l.17-.05a.005.005 0 01.007.005z" />
        </G>
      </G>
    </Svg>
  )
}
export default SvgSocialOpensea
