/* @flow */

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
  children?: React$Element<any> | Array<React$Element<any>>,
  onLongPress?: Function,
  onPress?: Function,
  style?: StyleSheet,
}

type Props = {
  children?: React$Element<any> | Array<React$Element<any>>,
  onLongPress?: Function,
  onPress: Function,
  style?: StyleSheet,
}

class Touchable extends PureComponent<Props, void> {
  props: Props

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    onLongPress: PropTypes.func,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps: DefaultProps = {
    children: undefined,
    onLongPress: undefined,
    style: null,
  }

  componentWillMount() {
    if (!this.props.children)
      throw new Error('Touchable requires at least 1 children')
  }

  requestAnimationFrame: () => number

  render() {
    const { children, onLongPress, onPress, style, ...remainingProps } = this.props
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
