/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

type DefaultProps = {
  children: React$Element<any>,
  onLongPress: Function,
  onPress: Function,
  style: null,
}

type Props = {
  children?: React$Element<any>,
  onLongPress?: Function,
  onPress?: Function,
  style?: StyleSheet,
}

class Touchable extends Component<Props, void> {
  props: Props

  static propTypes = {
    children: PropTypes.element,
    onLongPress: PropTypes.func,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps: DefaultProps = {
    children: <SafeAreaView />,
    onLongPress: () => null,
    onPress: () => null,
    style: null,
  }

  requestAnimationFrame: () => number

  shouldComponentUpdate = (nextProps: Props): boolean => {
    if (nextProps.children !== this.props.children) {
      return true
    }
    if (nextProps.onPress !== this.props.onPress) {
      return true
    }
    if (nextProps.style !== this.props.children) {
      return true
    }
    return false
  }

  render() {
    const { children, onLongPress, onPress, style } = this.props
    return Platform.OS === 'ios' ? (
      <TouchableOpacity
        activeOpacity={0.7}
        onLongPress={onLongPress}
        onPress={onPress}
      >
        <SafeAreaView style={style}>{children}</SafeAreaView>
      </TouchableOpacity>
    ) : (
      <TouchableNativeFeedback
        useForeground
        onPress={onPress}
        onLongPress={onLongPress}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <SafeAreaView style={style}>{children}</SafeAreaView>
      </TouchableNativeFeedback>
    )
  }
}

export default Touchable
