/* @flow */
/* eslint camelcase: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'

import { DEFAULT_TEXT_COLOR_DARK } from '@theme/colors'
import Touchable from '@components/Touchable'

import { type Props, type DefaultProps, brandColors } from './constants'
import styles from './styles'

class Button extends Component<Props> {
  static propTypes = {
    children: PropTypes.element,
    color: PropTypes.oneOf(['blue', 'green', 'red', 'yellow', 'white']),
    inactive: PropTypes.bool,
    onPress: PropTypes.func,
    replace: PropTypes.bool,
    routeState: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
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

  UNSAFE_componentWillMount() {
    const { children, onPress, text, to } = this.props
    if (!children && !text)
      throw new Error('Button requires at least 1 children or a `text`s prop')
    if (!to && !onPress)
      throw new Error('Button requires at least an `onPress` or `to` prop')
  }

  _renderButton = () => {
    const { color, children, inactive, style, text } = this.props
    return (
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
        {text && (
          <Text
            style={[
              styles.text,
              color === 'white' && { color: DEFAULT_TEXT_COLOR_DARK },
              inactive && { color: color && brandColors[color] },
            ]}
          >
            {text}
          </Text>
        )}
        {children}
      </View>
    )
  }

  render() {
    const {
      onPress,
      replace,
      routeState: state,
      to: pathname,
      ...remainingProps
    } = this.props
    return pathname ? (
      <Link
        onPress={onPress}
        to={{ pathname, state }}
        component={Touchable}
        replace={replace || false}
        {...remainingProps}
      >
        {this._renderButton()}
      </Link>
    ) : (
      <Touchable onPress={onPress || console.log} {...remainingProps}>
        {this._renderButton()}
      </Touchable>
    )
  }
}

export default Button
