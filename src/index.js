/* @flow */

import React, { Component } from 'react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { AppState } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Root from '@app'
import reduxStore, { persistor } from '@redux'
import { client, setupApollo } from '@graphql/setup'

type State = {
  appState: 'active' | 'background' | 'inactive',
  isRehydratingStore: boolean,
}

class Core extends Component<void, State> {
  state = {
    appState: AppState.currentState,
    isRehydratingStore: true,
  }

  async componentDidMount() {
    setupApollo().then(() =>
      this.setState(() => ({ isRehydratingStore: false }))
    )

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

  render() {
    const { isRehydratingStore } = this.state
    if (isRehydratingStore) return null
    return (
      <ApolloProvider client={client}>
        <Provider store={reduxStore}>
          <PersistGate loading={null} persistor={persistor}>
            <ActionSheetProvider>
              <Root />
            </ActionSheetProvider>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    )
  }
}

export default Core
