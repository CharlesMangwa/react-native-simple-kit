/* @flow */

import { /* applyMiddleware, */ combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import foo from './foo'

import type { Store } from '@types'
import * as reducers from './reducers'

// const fooMiddleware = barSomething(foo)

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app', 'counter', 'user'],
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
