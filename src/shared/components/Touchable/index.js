/* @flow */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

type DefaultProps = {
  children: null,
  onLongPress: ?Function,
  onPress: Function,
  style: null,
}

type Props = {
  children?: React$Element<any>,
  onLongPress?: Function,
  onPress?: Function,
  style?: StyleSheet,
}

class Touchable extends PureComponent<Props, void> {
  props: Props

  static propTypes = {
    children: PropTypes.element,
    onLongPress: PropTypes.func,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps: DefaultProps = {
    children: null,
    onLongPress: undefined,
    onPress: () => null,
    style: null,
  }

  componentWillMount() {
    if (!this.props.children) {
      throw new Error('Touchable requires at least 1 children')
    }
  }

  requestAnimationFrame: () => number

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
