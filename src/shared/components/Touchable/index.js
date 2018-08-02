/* @flow */
/* eslint camelcase: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'

type DefaultProps = {
  children?: React$Element<*> | Array<React$Element<*>>,
  onLongPress?: Function,
  onPress?: Function,
  ripple?: { color: string, borderless: boolean },
  style?: StyleSheet,
}

type Props = {
  children?: React$Element<*> | Array<React$Element<*>>,
  onLongPress?: Function,
  onPress: Function,
  ripple?: { color: string, borderless: boolean },
  style?: StyleSheet,
}

class Touchable extends Component<Props> {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
    onLongPress: PropTypes.func,
    onPress: PropTypes.func.isRequired,
    ripple: PropTypes.shape({
      color: PropTypes.string.isRequired,
      borderless: PropTypes.bool.isRequired,
    }),
    style: PropTypes.any, // eslint-disable-line
  }

  static defaultProps: DefaultProps = {
    children: undefined,
    onLongPress: undefined,
    ripple: undefined,
    style: null,
  }

  UNSAFE_componentWillMount() {
    const { children } = this.props
    if (!children) throw new Error('Touchable requires at least 1 children')
  }

  render() {
    const {
      children,
      onLongPress,
      onPress,
      ripple,
      style,
      ...remainingProps
    } = this.props
    return Platform.OS === 'ios' ? (
      <TouchableOpacity
        activeOpacity={0.7}
        delayLongPress={200}
        onLongPress={onLongPress}
        onPress={onPress}
      >
        <View {...remainingProps} style={style}>
          {children}
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableNativeFeedback
        useForeground
        delayLongPress={200}
        onPress={onPress}
        onLongPress={onLongPress}
        background={
          ripple
            ? TouchableNativeFeedback.Ripple(ripple.color, ripple.borderless)
            : TouchableNativeFeedback.SelectableBackground()
        }
      >
        <View {...remainingProps} style={style}>
          {children}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default Touchable
