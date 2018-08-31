/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BRAND_COLOR_RED, NEUTRAL_COLOR_45 } from '@theme/colors'

type Props = {
  color: string,
  size: number,
}

const Profile = ({ color, size }: Props): React$Element<any> =>
  color === BRAND_COLOR_RED ? (
    <Svg width={size} height={size} viewBox="0 0 25 25">
      <Path
        d="M12.5 0A6.496 6.496 0 0 0 6 6.5c0 3.593 2.907 6.5 6.5 6.5S19 10.093 19 6.5 16.093 0 12.5 0zm0 16C2.966 16 0 22 0 22v3h25v-3s-2.966-6-12.5-6z"
        fill={BRAND_COLOR_RED}
        fillRule="nonzero"
      />
    </Svg>
  ) : (
    <Svg width={size} height={size} viewBox="0 0 27 27">
      <Path
        d="M13.5 1A6.496 6.496 0 0 0 7 7.5c0 3.593 2.907 6.5 6.5 6.5S20 11.093 20 7.5 17.093 1 13.5 1zm0 16C3.966 17 1 23 1 23v3h25v-3s-2.966-6-12.5-6z"
        fillRule="nonzero"
        stroke={NEUTRAL_COLOR_45}
        fill="none"
      />
    </Svg>
  )

export default Profile
