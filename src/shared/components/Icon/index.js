/* @flow */

import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { NEUTRAL_COLOR_50, BRAND_COLOR_GREEN } from '@theme/colors'
import * as SVGs from './SVGs'

type Props = {
  activated?: boolean,
  defaultActivatedColor?: string,
  defaultColor?: string,
  name: string,
  size: number,
  style?: ?Array<?StyleSheet> | StyleSheet,
}

const Icon = (props: Props): React$Element<*> => {
  const {
    name,
    style,
    size,
    activated,
    defaultColor,
    defaultActivatedColor,
  } = props
  const color = activated
    ? defaultActivatedColor || BRAND_COLOR_GREEN
    : defaultColor || NEUTRAL_COLOR_50

  let icon
  switch (name) {
    case 'backButton':
      icon = SVGs.Back
      break
    case 'home':
      icon = SVGs.Home
      break
    case 'people':
      icon = SVGs.People
      break
    case 'profile':
      icon = SVGs.Profile
      break
    default: {
      icon = createElement(View, { ...props })
      throw new Error(`Invalid SVG name: ${name}`)
    }
  }

  return (
    <View {...props} style={style}>
      {createElement(icon, { color, size })}
    </View>
  )
}

Icon.propTypes = {
  activated: PropTypes.bool,
  defaultActivatedColor: PropTypes.string,
  defaultColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
}

Icon.defaultProps = {
  activated: false,
  defaultActivatedColor: BRAND_COLOR_GREEN,
  defaultColor: NEUTRAL_COLOR_50,
  style: undefined,
}

export default Icon
