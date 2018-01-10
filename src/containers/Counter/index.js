/* @flow */

import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'

import type { Counter as CounterType, ReduxAction } from '@store/types'
import { BRAND_COLOR_RED } from '@theme/colors'
import background from '@assets/images/background.png'

import Button from '@components/Button'
import Modal from '@components/Modal'
import TextInput from '@components/TextInput'

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
  props: Props
  state: State = {
    isModalVisible: false,
    password: null,
  }
  textInput: ?Class<any>

  _handleModalState = (): void =>
    this.setState((state: State) => ({ isModalVisible: !state.isModalVisible }))

  // counter, increment & decrement are used here for (Redux) demo purposes only.
  // You can perform the exact same thing with just React's state & setState.
  _renderModalContent = (): React$Element<any> => (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>{this.props.counter}</Text>
      <View style={styles.modalButtonsWrapper}>
        <Button
          color="blue"
          onPress={this.props.decrement}
          text="-"
          style={styles.modalButton}
        />
        <Button
          onPress={this.props.increment}
          text="+"
          style={styles.modalButton}
        />
      </View>
      <Button color="white" onPress={this.props.reset} text="Reset" />
    </View>
  )

  _onChangeText = (password: string): void =>
    this.setState(() => ({ password }))

  _onSubmit = (): void => {
    if (this.state.password === '101') {
      this.setState(() => ({ isModalVisible: true }))
      if (this.textInput) this.textInput.ref.clear()
    }
  }

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={background}
      >
        <Text style={styles.text}>Counter</Text>
        <TextInput
          ref={(c: any) => (this.textInput = c)}
          onChangeText={this._onChangeText}
          keyboardType="numeric"
          placeholder="Type '101' to enter"
          onSubmitEditing={this._onSubmit}
          selectionColor={`${BRAND_COLOR_RED}80`}
        />
        <Modal
          animationIn="slideInDown"
          isVisible={this.state.isModalVisible}
          content={this._renderModalContent}
          onClosePressed={this._handleModalState}
        />
      </ImageBackground>
    )
  }
}

export default connect(Counter)
