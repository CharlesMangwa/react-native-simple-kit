/* @flow */
/* eslint camelcase: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

import { DEFAULT_TEXT_COLOR } from '@theme/colors'
import Touchable from '@components/Touchable'

import { type Props, type DefaultProps, brandColors } from './constants'
import styles from './styles'

class Button extends Component<Props> {
  static propTypes = {
    children: PropTypes.element,
    color: PropTypes.string,
    inactive: PropTypes.bool,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    onPress: PropTypes.func,
    params: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    text: PropTypes.string,
    to: PropTypes.string,
  }

  static defaultProps: DefaultProps = {
    children: undefined,
    color: 'red',
    inactive: false,
    onPress: undefined,
    params: {},
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
    const { color: providedColor, children, inactive, style, text } = this.props
    const color = (providedColor && brandColors[providedColor]) || providedColor
    return (
      <View
        style={[
          styles.container,
          color && {
            backgroundColor: color,
            borderColor: color,
          },
          inactive && {
            backgroundColor: color && 'transparent',
            borderColor: color && color,
          },
          style,
        ]}
      >
        {text && (
          <Text
            style={[
              styles.text,
              color === 'white' && { color: DEFAULT_TEXT_COLOR },
              inactive && { color },
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
    const { navigation, onPress, params, to, ...remainingProps } = this.props
    return (
      <Touchable
        onPress={
          to
            ? () => {
                if (onPress) onPress()
                navigation.navigate(to, params)
              }
            : onPress
        }
        {...remainingProps}
      >
        {this._renderButton()}
      </Touchable>
    )
  }
}

export default withNavigation(Button)
