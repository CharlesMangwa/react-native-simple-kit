/* @flow */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'

import { DEFAULT_TEXT_COLOR_DARK } from '@theme/colors'
import Touchable from '@components/Touchable'

import {
  type Props,
  type DefaultProps,
  brandColors,
} from './constants'
import styles from './styles'

class Button extends PureComponent<Props, void> {
  props: Props

  static propTypes = {
    children: PropTypes.element,
    color: PropTypes.oneOf(['blue', 'green', 'red', 'yellow', 'white']),
    inactive: PropTypes.bool,
    onPress: PropTypes.func,
    replace: PropTypes.bool,
    routeState: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]), // eslint-disable-line react/forbid-prop-types
    text: PropTypes.string,
    to: PropTypes.string,
  }

  static defaultProps: DefaultProps = {
    children: undefined,
    color: 'red',
    inactive: false,
    onPress: undefined,
    replace: false,
    routeState: undefined,
    style: undefined,
    text: undefined,
    to: undefined,
  }

  componentWillMount() {
    if (!this.props.children && !this.props.text)
      throw new Error('Button requires at least 1 children or a `text`s prop')
    if (!this.props.to && !this.props.onPress)
      throw new Error('Button requires at least an `onPress` or `to` prop')
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
