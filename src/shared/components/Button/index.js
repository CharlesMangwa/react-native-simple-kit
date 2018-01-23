/* @flow */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import { DEFAULT_TEXT_COLOR_DARK } from '@theme/colors'
import Touchable from '@components/Touchable'

import { type Props, type DefaultProps, brandColors } from './constants'
import styles from './styles'

class Button extends PureComponent<Props, void> {
  props: Props

  static propTypes = {
    children: PropTypes.element,
    color: PropTypes.oneOf(['blue', 'green', 'red', 'yellow', 'white']),
    inactive: PropTypes.bool,
    onLongPress: PropTypes.func,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]), // eslint-disable-line react/forbid-prop-types
    text: PropTypes.string,
  }

  static defaultProps: DefaultProps = {
    children: undefined,
    color: 'red',
    inactive: false,
    onLongPress: undefined,
    style: undefined,
    text: undefined,
  }

  componentWillMount() {
    if (!this.props.children && !this.props.text) {
      throw new Error('Button requires at least 1 children or a `text`s prop')
    }
    if (!this.props.onPress) {
      throw new Error('Button requires an `onPress` prop')
    }
  }

  render() {
    const {
      color,
      children,
      inactive,
      onLongPress,
      onPress,
      style,
      text,
    } = this.props
    return (
      <Touchable
        onLongPress={onLongPress}
        onPress={onPress}
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
      </Touchable>
    )
  }
}

export default Button
