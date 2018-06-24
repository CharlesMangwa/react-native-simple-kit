/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BRAND_COLOR_RED, NEUTRAL_COLOR_45 } from '@theme/colors'

type Props = {
  color: string,
  size: number,
}

const Home = ({ color, size }: Props): React$Element<any> => (
  <Svg width={size} height={size} viewBox="0 0 25 25">
    <Path
      d="M16.601 16.601l7.014 7.014-7.014-7.014a8.846 8.846 0 1 1-12.51-12.51 8.846 8.846 0 0 1 12.51 12.51z"
      stroke={color === BRAND_COLOR_RED ? BRAND_COLOR_RED : NEUTRAL_COLOR_45}
      strokeWidth="1.75"
      fill="none"
      fillRule="evenodd"
    />
  </Svg>
)

export default Home
