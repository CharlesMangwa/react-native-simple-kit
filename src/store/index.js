/* @flow */

import { AsyncStorage } from 'react-native'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import { routerMiddleware } from 'react-router-redux'
import { history } from 'RNSK'

import type { Store } from './types'
import * as reducers from './reducers'

const historyMiddleware: Function = routerMiddleware(history)

// Create store
const store: Store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(historyMiddleware),
)

persistStore(store, {
  storage: AsyncStorage,
})

export default store
