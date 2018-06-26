/* @flow */

import React, { Component } from 'react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import {
  ActivityIndicator,
  AppState,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from '@navigation'
import reduxStore, { persistor } from '@redux'
import { BRAND_COLOR_RED } from '@theme/colors'
import { vh, vw } from '@helpers/responsive'

type State = {
  appState: 'active' | 'background' | 'inactive',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    height: vh(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BRAND_COLOR_RED,
  },
})

class Core extends Component<void, State> {
  state = {
    appState: AppState.currentState,
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange = async (
    nextAppState: 'active' | 'background' | 'inactive'
  ) => {
    const { appState } = this.state
    if (appState.match(/inactive|background/) && nextAppState === 'active')
      this.setState(() => ({ appState: nextAppState }))
  }

  _renderLoader = () => (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BRAND_COLOR_RED} />
      <ActivityIndicator size="large" color="white" />
    </View>
  )

  render() {
    return (
      <Provider store={reduxStore}>
        <PersistGate loading={this._renderLoader} persistor={persistor}>
          <ActionSheetProvider>
            <Navigation />
          </ActionSheetProvider>
        </PersistGate>
      </Provider>
    )
  }
}

export default Core
