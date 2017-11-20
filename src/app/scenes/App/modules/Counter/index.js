/* @flow */

import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'

import Modal from '@components/Modal'
import TextInput from '@components/TextInput'
import background from '@assets/images/background.png'
import styles from './styles'

type State = {
  isModalVisible: boolean,
  password: ?string,
}

class Counter extends Component<void, State> {
  state: State = {
    isModalVisible: false,
    password: null,
  }
  _textInput: ?React$Element<any>

  _handleModalState = (): void =>
    this.setState((state: State) => ({ isModalVisible: !state.isModalVisible }))

  _renderModalContent = (): React$Element<any> =>
    <View style={styles.modalContentainer}>
      <Text>Hello!</Text>
    </View>

  _onChangeText = (password: string): void =>
    this.setState(() => ({ password }))

  _onSubmit = (): void => {
    if (this.state.password === '101') {
      this.setState(() => ({ isModalVisible: true }))
      if (this._textInput) this._textInput.ref.clear()
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
          ref={(c: any) => this._textInput = c}
          onChangeText={this._onChangeText}
          keyboardType="numeric"
          placeholder="Type '101' to enter"
          onSubmitEditing={this._onSubmit}
        />
        <Modal
          isVisible={this.state.isModalVisible}
          content={this._renderModalContent}
          onClosePressed={this._handleModalState}
        />
      </ImageBackground>
    )
  }
}

export default Counter
