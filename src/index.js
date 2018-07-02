/* @flow */

import React, { Component } from 'react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import {
  ActivityIndicator,
  AppState,
  Dimensions,
  NetInfo,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from '@navigation'
import reduxStore, { persistor } from '@redux'
import { Device } from '@components'
import { BRAND_COLOR_RED } from '@theme/colors'
import { vh, vw } from '@helpers/responsive'

type AppStateType = 'active' | 'background' | 'inactive'

type State = {
  appState: AppStateType,
  isConnected: ?boolean,
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

const Loader = (): React$Element<*> => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={BRAND_COLOR_RED} />
    <ActivityIndicator size="large" color="white" />
  </View>
)

class Core extends Component<void, State> {
  state = {
    appState: AppState.currentState,
    isConnected: undefined,
  }

  componentDidMount() {
    NetInfo.isConnected
      .fetch()
      .then(isConnected => this.setState(() => ({ isConnected })))
    AppState.addEventListener('change', this._handleAppStateChange)
    NetInfo.removeEventListener('connectionChange', this._handleNetInfoChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
    NetInfo.removeEventListener('connectionChange', this._handleNetInfoChange)
  }

  _handleAppStateChange = (nextAppState: AppStateType) =>
    this.setState(() => ({ appState: nextAppState }))

  _handleNetInfoChange = (isConnected: boolean) =>
    this.setState(() => ({ isConnected }))

  render() {
    const { appState, isConnected } = this.state
    return (
      <Provider store={reduxStore}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <ActionSheetProvider>
            <Device.Provider
              value={{
                appState,
                isConnected,
                height: Dimensions.get('window').height,
                platform: Platform.OS,
                width: Dimensions.get('window').width,
              }}
            >
              <Navigation />
            </Device.Provider>
          </ActionSheetProvider>
        </PersistGate>
      </Provider>
    )
  }
}

export default Core
