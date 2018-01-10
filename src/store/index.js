/* @flow */

import { AsyncStorage } from 'react-native'
import { combineReducers, createStore } from 'redux'
import { persistStore } from 'redux-persist'

import type { Store } from './types'
import * as reducers from './reducers'

// Create store
const store: Store = createStore(
  combineReducers({ ...reducers }),
  // applyMiddleware(...),
)

persistStore(store, {
  storage: AsyncStorage,
})

export default store
