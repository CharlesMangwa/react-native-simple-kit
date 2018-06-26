/* @flow */

import { AsyncStorage } from 'react-native'
import { /* applyMiddleware, */ combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
// import { routerMiddleware } from 'react-router-redux'
// import { foo } from './foo'

import type { Store } from '@types'
import * as reducers from './reducers'

// const fooMiddleware: Function = routerMiddleware(foo)

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ ...reducers })
)

const store: Store = createStore(
  persistedReducer
  // applyMiddleware(fooMiddleware),
)

const persistor = persistStore(store)

export default store
export { persistor }
