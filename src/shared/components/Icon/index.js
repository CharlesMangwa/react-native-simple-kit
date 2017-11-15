/* @flow */

import React, { createElement } from 'react'
import { View } from 'react-native'

import { rem } from '@helpers/responsive'
import { NEUTRAL_COLOR_50, BRAND_COLOR_GREEN } from '@theme/colors'
import * as SVGs from './SVGs'

type Props = {
  actived?: boolean,
  defaultactivedColor?: string,
  defaultColor?: string,
  name: string,
  size: number,
  style?: StyleSheet,
}

const Icon = (props: Props): React$Element<any> => {
  const { name, style, size, actived, defaultColor, defaultactivedColor } = props
  const color = actived
    ? defaultactivedColor || BRAND_COLOR_GREEN
    : defaultColor || NEUTRAL_COLOR_50

  let icon
  switch (name) {
    case 'backButton': icon = SVGs.Back
      break
    default: {
      console.error(`Invalid SVG name: ${name}`)
      icon = <View />
    }
  }

  return (
    icon &&
    <View {...props} style={style}>
      {/* // $FlowFixMe */}
      {createElement(icon, { color, size })}
    </View>
  )
}

Icon.defaultProps = {
  actived: false,
  defaultactivedColor: BRAND_COLOR_GREEN,
  defaultColor: NEUTRAL_COLOR_50,
  size: rem(0.875),
  style: null,
}

export default Icon
