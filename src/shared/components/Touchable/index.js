/* @flow */
/* eslint camelcase: 0 */

import React, { PureComponent } from 'react'
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
  style?: StyleSheet,
}

type Props = {
  children?: React$Element<*> | Array<React$Element<*>>,
  onLongPress?: Function,
  onPress: Function,
  style?: StyleSheet,
}

class Touchable extends PureComponent<Props> {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
    onLongPress: PropTypes.func,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.any, // eslint-disable-line
  }

  static defaultProps: DefaultProps = {
    children: undefined,
    onLongPress: undefined,
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
      style,
      ...remainingProps
    } = this.props
    return Platform.OS === 'ios' ? (
      <TouchableOpacity
        activeOpacity={0.7}
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
        onPress={onPress}
        onLongPress={onLongPress}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View {...remainingProps} style={style}>
          {children}
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default Touchable
