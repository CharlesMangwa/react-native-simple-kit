/* @flow */

import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'

import { NEUTRAL_COLOR_50, BRAND_COLOR_GREEN } from '@theme/colors'
import * as SVGs from './SVGs'

type Props = {
  activated?: boolean,
  defaultActivatedColor?: string,
  defaultColor?: string,
  name: string,
  size: number,
  style?: ?StyleSheet,
}

const Icon = (props: Props): React$Element<any> => {
  const { name, style, size, activated, defaultColor, defaultActivatedColor } = props
  const color = activated
    ? defaultActivatedColor || BRAND_COLOR_GREEN
    : defaultColor || NEUTRAL_COLOR_50

  let icon
  switch (name) {
    case 'backButton': icon = SVGs.Back
      break
    default: {
      icon = createElement(SafeAreaView, { ...props })
      throw new Error(`Invalid SVG name: ${name}`)
    }
  }

  return (
    <SafeAreaView {...props} style={style}>
      {createElement(icon, { color, size })}
    </SafeAreaView>
  )
}

Icon.propTypes = {
  activated: PropTypes.bool,
  defaultActivatedColor: PropTypes.string,
  defaultColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]), // eslint-disable-line react/forbid-prop-types
}

Icon.defaultProps = {
  activated: false,
  defaultActivatedColor: BRAND_COLOR_GREEN,
  defaultColor: NEUTRAL_COLOR_50,
  style: undefined,
}

export default Icon
