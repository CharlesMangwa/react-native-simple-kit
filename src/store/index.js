/* @flow */
/* eslint no-console: 0 */

import { AsyncStorage } from 'react-native'
import { createStore, combineReducers } from 'redux'
import { persistStore } from 'redux-persist'

import type { Store } from './types'
import * as reducers from './reducers'

// Create store
const store: Store = createStore(
  combineReducers({ ...reducers }),
  {},
)

persistStore(store, {
  storage: AsyncStorage,
})

export default store
