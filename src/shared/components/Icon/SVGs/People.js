/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { BRAND_COLOR_RED, NEUTRAL_COLOR_45 } from '@theme/colors'

type Props = {
  color: string,
  size: number,
}

const People = ({ color, size }: Props): React$Element<any> => {
  const ratio = 29 / 19
  if (color === BRAND_COLOR_RED) {
    return (
      <Svg width={size * ratio} height={size} viewBox="0 0 29 19">
        <Path
          d="M15 0c-2.266 0-4 1.734-4 4s1.734 4 4 4 4-1.734 4-4-1.734-4-4-4zM6.5 3C4.57 3 3 4.57 3 6.5S4.57 10 6.5 10 10 8.43 10 6.5 8.43 3 6.5 3zm17 0C21.57 3 20 4.57 20 6.5s1.57 3.5 3.5 3.5S27 8.43 27 6.5 25.43 3 23.5 3zm-9 8c-6.066 0-7.91 4.417-7.91 4.417v-3.084h-.658C1.318 12.333 0 15.917 0 15.917V19h29v-3.083s-1.318-3.584-5.932-3.584h-.659v3.084S20.566 11 14.5 11z"
          fill={BRAND_COLOR_RED}
          fillRule="nonzero"
        />
      </Svg>
    )
  }
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 29 19">
      <Path
        d="M15 .5c-1.99 0-3.5 1.51-3.5 3.5s1.51 3.5 3.5 3.5 3.5-1.51 3.5-3.5S16.99.5 15 .5zm-8.5 3c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm17 0c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM6.09 12.833h-.158c-1.883 0-3.303.618-4.345 1.648a5.44 5.44 0 0 0-.877 1.127c-.1.172-.169.311-.21.406V18.5h28v-2.486a4.066 4.066 0 0 0-.21-.406 5.44 5.44 0 0 0-.877-1.127c-1.042-1.03-2.462-1.648-4.345-1.648h-.159v5.08l-.961-2.304a4.351 4.351 0 0 0-.342-.611 7.18 7.18 0 0 0-1.212-1.42C18.96 12.28 17.027 11.5 14.5 11.5s-4.46.78-5.894 2.079a7.18 7.18 0 0 0-1.212 1.419c-.184.284-.295.5-.342.611l-.961 2.304v-5.08z"
        fill="none"
        fillRule="nonzero"
        stroke={NEUTRAL_COLOR_45}
      />
    </Svg>
  )
}

export default People
