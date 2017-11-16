/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'

import { DEFAULT_TEXT_COLOR_DARK } from '@theme/colors'
import Touchable from '@components/Touchable'

import {
  type ButtonProps as Props,
  type DefaultProps,
  brandColors,
} from './constants'
import styles from './styles'

class Button extends Component<Props, void> {
  props: Props

  static propTypes = {
    children: PropTypes.element,
    color: PropTypes.oneOf(['green', 'red', 'yellow', 'white']),
    inactive: PropTypes.bool,
    onPress: PropTypes.func,
    to: PropTypes.string,
    replace: PropTypes.bool,
    routeState: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    text: PropTypes.string,
  }

  static defaultProps: DefaultProps = {
    children: undefined,
    color: 'green',
    inactive: false,
    onPress: undefined,
    to: undefined,
    replace: false,
    routeState: undefined,
    style: undefined,
    text: undefined,
  }

  componentWillMount() {
    if (!this.props.children && !this.props.text) {
      throw new Error('No children or `text` prop was passed to <Button />')
    }
    if (!this.props.to && !this.props.onPress) {
      throw new Error('No `to` path or `onPress()` function was passed to <Button />')
    }
  }

  render() {
    const {
      color,
      children,
      inactive,
      onPress,
      replace,
      routeState,
      style,
      to,
      text,
    } = this.props
    return (
      <Link
        onPress={onPress}
        to={{ pathname: to || '', state: routeState || {} }}
        component={Touchable}
        replace={replace || false}
      >
        <View
          style={[
            styles.container,
            color && {
              backgroundColor: brandColors[color],
              borderColor: brandColors[color],
            },
            inactive && {
              backgroundColor: color && 'transparent',
              borderColor: color && brandColors[color],
            },
            style,
          ]}
        >
          {text &&
            <Text
              style={[
                styles.text,
                color === 'white' && { color: DEFAULT_TEXT_COLOR_DARK },
                inactive && { color: color && brandColors[color] },
              ]}
            >
              {text}
            </Text>}
          {children}
        </View>
      </Link>
    )
  }
}

export default Button
