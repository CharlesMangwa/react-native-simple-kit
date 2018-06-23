/* @flow */

import React from 'react'
import { NativeRouter } from 'react-router-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import createMemoryHistory from 'history/createMemoryHistory'

import type { History } from '@types'
import Root from '@app'
import store, { persistor } from '@redux'

export const history: History = createMemoryHistory()

const Core = (): React$Element<*> => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NativeRouter>
        <Root />
      </NativeRouter>
    </PersistGate>
  </Provider>
)

export default Core
