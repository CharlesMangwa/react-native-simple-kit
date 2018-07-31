/* @flow */

import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'

import type { Counter as CounterType, ReduxAction } from '@types'
import { BRAND_COLOR_RED } from '@theme/colors'
import background from '@assets/images/background.png'

import { Button, Modal, TextInput } from '@components'

import connect from './connect'
import styles from './styles'

type Props = {
  counter: CounterType,
  increment: () => ReduxAction,
  decrement: () => ReduxAction,
  reset: () => ReduxAction,
}

type State = {
  isModalVisible: boolean,
  password: ?string,
}

class Counter extends Component<Props, State> {
  state: State = {
    isModalVisible: false,
    password: null,
  }

  textInput: ?Object

  _handleModalState = () =>
    this.setState(state => ({
      isModalVisible: !state.isModalVisible,
    }))

  // counter, increment & decrement are used for (Redux) demo purposes only.
  // You can perform the exact same thing with just React's state & setState.
  _renderModalContent = (): React$Element<*> => {
    const { counter, decrement, increment, reset } = this.props
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{counter}</Text>
        <View style={styles.modalButtonsWrapper}>
          <Button
            color="blue"
            onPress={decrement}
            text="-"
            style={styles.modalButton}
          />
          <Button onPress={increment} text="+" style={styles.modalButton} />
        </View>
        <Button color="#000" onPress={reset} text="Reset" />
      </View>
    )
  }

  _onChangeText = (password: string) => this.setState(() => ({ password }))

  _onSubmit = () => {
    const { isModalVisible, password } = this.state
    if (password === '101' && !isModalVisible) {
      this.setState(
        () => ({ isModalVisible: true }),
        () => {
          // @FIXME: Everything sounds good...but it doesn't work 🙁
          if (this.textInput) this.textInput.ref.clear()
        }
      )
    }
  }

  render() {
    const { isModalVisible } = this.state
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={background}
      >
        <Text style={styles.text}>Counter</Text>
        <TextInput
          ref={this.textInput}
          onChangeText={this._onChangeText}
          keyboardType="numeric"
          placeholder="Type '101' to enter"
          onSubmitEditing={this._onSubmit}
          selectionColor={`${BRAND_COLOR_RED}80`}
        />
        <Modal
          animationIn="slideInDown"
          isVisible={isModalVisible}
          content={this._renderModalContent}
          onClosePressed={this._handleModalState}
        />
      </ImageBackground>
    )
  }
}
export default connect(Counter)
