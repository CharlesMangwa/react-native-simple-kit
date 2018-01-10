/* @flow */

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { App as AppType, Action as AppAction } from '@store/modules/app/types.js'
import type { Action as CounterAction, Counter as CounterType } from '@store/modules/counter/types.js'

export type State = {
  app: AppType,
  counter: CounterType,
}

export type ReduxAction = AppAction | CounterAction
export type App = AppType
export type Counter = CounterType
export type Dispatch = ReduxDispatch<ReduxAction>
export type Store = ReduxStore<State, ReduxAction>
