/* @flow */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput as TextInputModule, StyleSheet } from 'react-native'

import { BRAND_COLOR_RED, DEFAULT_TEXT_COLOR } from '@theme/colors'
import type { DefaultProps, Props } from './types'
import styles from './styles'

class TextInput extends Component<Props> {
  ref: ?Component<*>

  static defaultProps: DefaultProps = {
    autoCapitalize: 'none',
    autoFocus: false,
    defaultValue: undefined,
    keyboardType: 'default',
    multiline: false,
    onBlur: undefined,
    onChangeText: undefined,
    onContentSizeChange: undefined,
    onFocus: undefined,
    onSubmitEditing: undefined,
    placeholderTextColor: undefined,
    returnKeyType: 'done',
    selectionColor: undefined,
    secured: false,
    style: StyleSheet.flatten(null),
    value: undefined,
  }

  render() {
    const {
      autoCapitalize,
      autoFocus,
      defaultValue,
      keyboardType,
      multiline,
      onBlur,
      onChangeText,
      onContentSizeChange,
      onFocus,
      onSubmitEditing,
      placeholder,
      placeholderTextColor,
      returnKeyType,
      selectionColor,
      secured,
      style,
      value,
    } = this.props
    return (
      <TextInputModule
        ref={c => (this.ref = c)}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize || 'none'}
        blurOnSubmit={true}
        dataDetectorTypes="all"
        defaultValue={defaultValue}
        clearButtonMode="always"
        keyboardType={keyboardType || 'default'}
        multiline={multiline}
        onBlur={onBlur}
        onContentSizeChange={onContentSizeChange}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder || ''}
        placeholderTextColor={placeholderTextColor || `${DEFAULT_TEXT_COLOR}80`}
        returnKeyType={returnKeyType || 'done'}
        secureTextEntry={secured}
        selectionColor={selectionColor || BRAND_COLOR_RED}
        style={[styles.container, style]}
        underlineColorAndroid="transparent"
        value={value}
      />
    )
  }
}

TextInput.propTypes = {
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  keyboardType: PropTypes.oneOf([
    'default',
    'email-address',
    'numeric',
    'phone-pad',
    'ascii-capable',
    'numbers-and-punctuation',
    'url',
    'number-pad',
    'name-phone-pad',
    'decimal-pad',
    'twitter',
    'web-search',
  ]),
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.oneOf([
    'done',
    'go',
    'next',
    'search',
    'send',
    'none',
    'previous',
    'default',
    'emergency-call',
    'google',
    'join',
    'route',
    'yahoo',
  ]),
  selectionColor: PropTypes.string,
  secured: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  value: PropTypes.string,
}

export default TextInput
